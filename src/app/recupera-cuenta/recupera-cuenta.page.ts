import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-recupera-cuenta',
  templateUrl: './recupera-cuenta.page.html',
  styleUrls: ['./recupera-cuenta.page.scss'],
})
export class RecuperaCuentaPage implements OnInit {
  NombreUser: string;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  //retrocede a la pagina anterior
  salir(){
    this.router.navigate(['/home']);
  }
  //se le da clic al boton recuperar cuenta
  recuperar(){
    //guardo datos del nombre de usuario al cual se le cambiara la contraseña luego
    let navigationExtra: NavigationExtras={
      state:{NombreUser: this.NombreUser}
    }
    this.router.navigate(['/home']);
  }

}
