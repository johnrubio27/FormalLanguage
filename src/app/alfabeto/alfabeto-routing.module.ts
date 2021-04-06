import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlfabetoComponent } from './pages/alfabeto/alfabeto.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: AlfabetoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlfabetoRoutingModule { }
