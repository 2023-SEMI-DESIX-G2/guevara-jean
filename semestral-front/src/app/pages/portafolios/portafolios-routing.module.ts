import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesPortafoliosComponent } from './detalles-portafolios/detalles-portafolios.component';
import { GeneralComponent } from './general/general.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'general',
        component:GeneralComponent
      },
      {
        path:'ciencia',
        component:DetallesPortafoliosComponent
      },
      {
        path:'**',
        redirectTo:'general'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortafoliosRoutingModule { }
