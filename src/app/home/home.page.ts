import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})



export class HomePage implements OnInit{
  //variables a obtener del html
  NombreUser:string;
  Contrasena:string;

  
  constructor(private router: Router,private loadingCtrl: LoadingController) {}
  ngOnInit(){}
  recuperar(){
    this.router.navigate(['/recupera-cuenta']);
  }
  animacion(){
    let navigationExtra: NavigationExtras={
      state:{NombreUser: this.NombreUser}
    }
    this.router.navigate(['/pagina-principal'],navigationExtra);
    //al momento de cargar a la otra pagina se ejecuta una animación que dura 3 segundos 
    this.loadingCtrl.create({
      message: "Cargando.."
    }).then((loading)=>{
      loading.present();
      setTimeout(()=>{
        loading.dismiss();
      },3000)
    })
    //mientras ocurre la animación carga la pagina se carga la pagina de inicio
  }



}
