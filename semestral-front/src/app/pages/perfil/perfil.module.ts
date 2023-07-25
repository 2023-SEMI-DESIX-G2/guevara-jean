import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { FormsModule } from '@angular/forms';
import { NzModalModule } from 'ng-zorro-antd/modal';

import { PerfilRoutingModule } from './perfil-routing.module';
import { MiCuentaComponent } from './mi-cuenta/mi-cuenta.component';
import { WalletComponent } from './wallet/wallet.component';
import { ModalLoginComponent } from './modal-login/modal-login.component';


@NgModule({
  declarations: [
    MiCuentaComponent,
    WalletComponent,
    ModalLoginComponent
  ],
  imports: [
    CommonModule,
    PerfilRoutingModule,
    NzLayoutModule,
    FormsModule,
    NzModalModule
  ]
})
export class PerfilModule { }
