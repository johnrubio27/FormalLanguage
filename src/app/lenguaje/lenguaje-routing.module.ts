import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LenguajeComponent } from './pages/lenguaje/lenguaje.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: LenguajeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LenguajeRoutingModule { }
