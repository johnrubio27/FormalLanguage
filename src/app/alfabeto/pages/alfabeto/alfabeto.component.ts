import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Alfabetos } from '../../models/alfabeto.model';

@Component({
  selector: 'app-alfabeto',
  templateUrl: './alfabeto.component.html',
  styleUrls: ['./alfabeto.component.css']
})
export class AlfabetoComponent implements OnInit {

  // Son los array que vamos a utilizar 
  alfabetoArrayA!: string[];
  alfabetoArrayB!: string[];

  estado = false;

  // Operaciones de alfabeto y lenguaje
  unionAlfabeto!: string[];

  diferenciaAB!: string[];
  diferenciaBA!: string[];

  interseccion!: string[];

  // Formularios Reactivos
  myForm!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.myForm = this.fb.group(
      {
        arrayA: ['', [Validators.required]],
        arrayB: ['', [Validators.required]]
      }
    );
  }


  // Funcion utilizada para obtener los dos alfabetos ingresado por el usuario
  capturarArrayAlfabetos(): void {
    const { arrayA, arrayB } = this.myForm.value;
    this.alfabetoArrayA = limpiarRepetidos((arrayA.trim()).split(','));
    this.alfabetoArrayB = limpiarRepetidos((arrayB.trim()).split(','));
    this.operacionesValidas(this.alfabetoArrayA , this.alfabetoArrayB);
  }

  operacionesValidas(alfabeto1: string[], alfabeto2: string[]): void {
    this.estado = true;
    const objAlfabeto = new Alfabetos(alfabeto1, alfabeto2);
    this.unionAlfabeto = objAlfabeto.unionAlfabeto();
    this.diferenciaAB = objAlfabeto.diferenciaAlfabetoAB();
    this.diferenciaBA = objAlfabeto.diferenciaAlfabetoBA();
    this.interseccion = objAlfabeto.intersecion();
  }

}

function limpiarRepetidos(myArr: string[]): string[] {
  return myArr.filter((el, index) => myArr.indexOf(el) === index);
}
