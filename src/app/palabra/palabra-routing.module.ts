import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PalabraComponent } from './pages/palabra/palabra.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: PalabraComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PalabraRoutingModule { }
