import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlfabetoRoutingModule } from './alfabeto-routing.module';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AlfabetoComponent } from './pages/alfabeto/alfabeto.component';


@NgModule({
  declarations: [
    AlfabetoComponent
  ],
  imports: [
    CommonModule,
    AlfabetoRoutingModule,
    PrimeNGModule,
    ReactiveFormsModule
  ]
})
export class AlfabetoModule { }
