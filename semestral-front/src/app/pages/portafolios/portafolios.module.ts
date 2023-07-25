import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortafoliosRoutingModule } from './portafolios-routing.module';
import { GeneralComponent } from './general/general.component';
import { DetallesPortafoliosComponent } from './detalles-portafolios/detalles-portafolios.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    GeneralComponent,
    DetallesPortafoliosComponent
  ],
  imports: [
    CommonModule,
    PortafoliosRoutingModule,
    SharedModule
  ]
})
export class PortafoliosModule { }
