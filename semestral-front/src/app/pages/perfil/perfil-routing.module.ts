import { NgModule } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { RouterModule, Routes } from '@angular/router';
import { MiCuentaComponent } from './mi-cuenta/mi-cuenta.component';
import { WalletComponent } from './wallet/wallet.component';
import { ModalLoginComponent } from './modal-login/modal-login.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'miCuenta',
        component:ModalLoginComponent
      },
      {
        path:'wallet',
        component:WalletComponent
      },
      {
        path:'**',
        redirectTo:'miCuenta'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilRoutingModule { }
