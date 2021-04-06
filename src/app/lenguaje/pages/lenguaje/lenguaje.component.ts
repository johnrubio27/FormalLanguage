import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Lenguajes } from '../../models/lenguaje.model';

@Component({
  selector: 'app-lenguaje',
  templateUrl: './lenguaje.component.html',
  styleUrls: ['./lenguaje.component.css']
})
export class LenguajeComponent implements OnInit {

  lenguajeArrayA!: string[];
  lenguajeArrayB!: string[];

  estado = false;

  concatenar!: string[];

  // Operaciones de alfabeto y lenguaje
  unionlenguaje!: string[];

  diferenciaAB!: string[];
  diferenciaBA!: string[];

  interseccion!: string[];

  // Operaciones de lenguajes
  potenciaA!: string[];
  potenciaB!: string[];

  lenguajeInvA !: string[];
  lenguajeInvB !: string[];
  cardinalidadA !: number;
  cardinalidadB !: number;


  myForm!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.myForm = this.fb.group(
      {
        arrayA: ['', [Validators.required]],
        arrayB: ['', [Validators.required]],
        potencia: [1]
      }
    );
  }


  capturarArrayLenguajes(): void {
    const { arrayA, arrayB, potencia } = this.myForm.value;
    this.lenguajeArrayA = limpiarRepetidos((arrayA.trim()).split(','));
    this.lenguajeArrayB = limpiarRepetidos((arrayB.trim()).split(','));
    this.operacionesValidas(this.lenguajeArrayA , this.lenguajeArrayB, potencia);
  }

  operacionesValidas(lenguaje1: string[], lenguaje2: string[], potencia: number): void {
    this.estado = true;
    const objLenguajes = new Lenguajes(lenguaje1, lenguaje2);
    this.unionlenguaje = objLenguajes.unionAlfabeto();
    this.diferenciaAB = objLenguajes.diferenciaAlfabetoAB();
    this.diferenciaBA = objLenguajes.diferenciaAlfabetoBA();
    this.interseccion = objLenguajes.intersecion();
    this.potenciaA = objLenguajes.potenciaLenguajeRecursiva(lenguaje1, potencia);
    this.potenciaB = objLenguajes.potenciaLenguajeRecursiva(lenguaje2, potencia);
    this.lenguajeInvA = objLenguajes.inversa(lenguaje1);
    this.lenguajeInvB = objLenguajes.inversa(lenguaje2);
    this.cardinalidadA = objLenguajes.cardinalidad(lenguaje1);
    this.cardinalidadB = objLenguajes.cardinalidad(lenguaje2);
    this.concatenar = objLenguajes.concatenar();
  }

}

function limpiarRepetidos(myArr: string[]): string[] {
  return myArr.filter((el, index) => myArr.indexOf(el) === index);
}
/*
function recorgerDatos() {
  formAlfabeto = document.forms['formAlfabeto'];

  let alfabetoString = formAlfabeto.alfabatoArrayA.value.trim();
  let alfabetoArray = limpiarRepetidos(alfabetoString.split(','));

  let alfabetoStringB = formAlfabeto.alfabatoArrayB.value.trim();
  let alfabetoArrayB = limpiarRepetidos(alfabetoStringB.split(','));


  if( alfabetoString !== ''  &&  alfabetoStringB !== '' ) {
      operacionesAlfabeto = new Alfabetos(alfabetoArray, alfabetoArrayB);
      operacionesLenguajes = new Lenguajes(alfabetoArray, alfabetoArrayB);
      unionAlfabeto = operacionesAlfabeto.unionAlfabeto();
      console.log("🚀 ~ file: index.js ~ line 11 ~ recorgerDatos ~ unionAlfabeto", unionAlfabeto)
      diferenciaAB = operacionesAlfabeto.diferenciaAlfabeto();
      console.log("🚀 ~ file: index.js ~ line 12 ~ recorgerDatos ~ diferencia", diferenciaAB)
      intersecion = operacionesAlfabeto.intersecion();
      console.log("🚀 ~ file: index.js ~ line 15 ~ recorgerDatos ~ intersecion", intersecion)
      operacionesLenguajes.concatenar();
      console.log(operacionesLenguajes.potenciaRecursiva(alfabetoArray,2));
  }

}


function limpiarRepetidos(myArr) {
  return myArr.filter((el, index) => myArr.indexOf(el) === index)
}
 */
