import { Component } from '@angular/core';
import { Menu } from './shared/interfaces/menu.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = false;

  menuUsuario:Menu[]=[{
    titulo:'mi cuenta',
    ruta:'perfil/miCuenta'
  },
  {
    titulo:'wallet',
    ruta:'perfil/wallet'
  },]

  menuPortafolio:Menu[]=[{
    titulo:'General',
    ruta:'portafolio/general'
  },
  {
    titulo:'Economia',
    ruta:'portafolio/ciencia'
  },]
}
