import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'alfabeto',
    loadChildren: () => import('./alfabeto/alfabeto.module').then( m => m.AlfabetoModule)
  },
  {
    path: 'lenguaje',
    loadChildren: () => import('./lenguaje/lenguaje.module').then( m => m.LenguajeModule)
  },
  {
    path: 'palabra',
    loadChildren: () => import('./palabra/palabra.module').then( m => m.PalabraModule )
  },
  {
    path: '**',
    redirectTo: 'alfabeto'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
