import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PalabraRoutingModule } from './palabra-routing.module';
import { PalabraComponent } from './pages/palabra/palabra.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';


@NgModule({
  declarations: [
    PalabraComponent
  ],
  imports: [
    CommonModule,
    PalabraRoutingModule,
    ReactiveFormsModule,
    PrimeNGModule
  ]
})
export class PalabraModule { }
