import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {  NavigationExtras, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { BdLocalService } from 'src/app/services/bd-local.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})



export class HomePage implements OnInit{

  //variables a obtener del html
  NombreUser:string;
  Contrasena:string;

  //validaciones que hago en el validators a los formcontrol
  userCtrl= new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(15)]);
  contraCtrl=new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(30)]);
  //crear componentes de los imports que usare
  constructor(private router: Router,private loadingCtrl: LoadingController,private bdLocal: BdLocalService) {
  }

  ///obtener errores del usuario en el form
  obtenerErrorForm(){
    if (this.userCtrl.hasError('required')) {
      return 'Ingrese un usuario';
    
    }
    else if(this.userCtrl.hasError('minlength')){
      return 'Largo pequeño';
    }else if(this.userCtrl.hasError('maxlength')){
      return 'Limite superado';
    }
  }
  //obtener errores de contraseña en el form
  obtenerErrorForm2(){
    if (this.contraCtrl.hasError('required')) {
      return 'Ingrese una contraseña';
    
    }
    else if(this.contraCtrl.hasError('minlength')){
      return 'Largo pequeño';
    }else if(this.contraCtrl.hasError('maxlength')){
      return 'Limite superado';
    }
  }
  ////////////////////////////////////////////////////

  //inicializar metodos async
  ngOnInit(){}
  

  ///enviarme a la pagina recuperar cuenta
  recuperar(){
    this.router.navigate(['/recupera-cuenta']);
  }
  ////////////

  /////verificar validaciones hechas arriba si estan bien se guardan en el localstorage
  loguear(){
    if (!this.userCtrl.hasError('required') && !this.userCtrl.hasError('minlength') && !this.userCtrl.hasError('maxlength') &&
    !this.contraCtrl.hasError('required') && !this.contraCtrl.hasError('minlength') && !this.contraCtrl.hasError('maxlength')) 
    {
      this.bdLocal.guardarContactos(this.NombreUser,this.Contrasena);
      //guardo los datos del nombre de usuario
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
    }else{
      return 'ERROR'
    }
  }
  //////////////////
  }




