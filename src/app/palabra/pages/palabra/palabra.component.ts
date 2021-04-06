import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Palabra } from '../../models/palabra.model';

@Component({
  selector: 'app-palabra',
  templateUrl: './palabra.component.html',
  styleUrls: ['./palabra.component.css']
})
export class PalabraComponent implements OnInit {

  palabraString!: string;

  estado = false;

  myForm!: FormGroup;

  palabraInversa!: string;
  cardinalidad!: number;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.myForm = this.fb.group(
      {
        palabra: ['', [Validators.required]]
      }
    );
  }


  capturarArrayLenguajes(): void {
    const { palabra } = this.myForm.value;
    this.palabraString = palabra;
    this.operacionesValidas(this.palabraString );
  }

  operacionesValidas(lenguaje1: string): void {
    this.estado = true;
    const objPalabra = new Palabra(lenguaje1);
    this.palabraInversa = objPalabra.inversaPalabra();
    this.cardinalidad = objPalabra.cardinalidad();
  }

}

function limpiarRepetidos(myArr: string[]): string[] {
  return myArr.filter((el, index) => myArr.indexOf(el) === index);
}

