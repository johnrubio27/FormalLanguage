import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LenguajeRoutingModule } from './lenguaje-routing.module';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LenguajeComponent } from './pages/lenguaje/lenguaje.component';


@NgModule({
  declarations: [
    LenguajeComponent
  ],
  imports: [
    CommonModule,
    LenguajeRoutingModule,
    PrimeNGModule,
    ReactiveFormsModule
  ]
})
export class LenguajeModule { }
