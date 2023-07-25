import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'perfil',
    loadChildren:()=>import('./pages/perfil/perfil.module').then((m)=>m.PerfilModule)
  },
  {
    path:'portafolio',
    loadChildren:()=>import('./pages/portafolios/portafolios.module').then((m)=>m.PortafoliosModule)
  },
  {
    path:'**',
    redirectTo:'perfil'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
