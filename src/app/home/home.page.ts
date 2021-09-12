import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  //variables a obtener del html
  NombreUser:string;
  Contrasena:string;

  constructor(private router: Router) {}
  ngOnInit(){}
  recuperar(){
    this.router.navigate(['/recupera-cuenta']);
  }
  loguear(){
    let navigationExtra: NavigationExtras={
      state:{NombreUser: this.NombreUser}
    }
    this.router.navigate(['/pagina-principal'],navigationExtra);
  }


}
