import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { ContactoService } from 'src/app/services/contacto.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  

  newUsuario: Usuario={
    strNombre:'',
    strCorreo:'',
    strPassword:'',
    id:this.database.getId()
};



private path='Usuario/';
  //validaciones que hago en el validators a los formcontrol
  userCtrl= new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(15)]);
  contraCtrl=new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(30)]);
  CorreoCtrl=new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(30)]);
  constructor(private router: Router,public database: ContactoService,public toastController: ToastController) { }

  ngOnInit() {
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
  ///obtener errores del correo en el form
  obtenerErrorForm3(){
    if (this.CorreoCtrl.hasError('required')) {
      return 'Ingrese un correo';
    
    }
    else if(this.CorreoCtrl.hasError('minlength')){
      return 'Largo pequeño';
    }else if(this.CorreoCtrl.hasError('maxlength')){
      return 'Limite superado';
    }
  }
  

  Registrar(){
    if (!this.userCtrl.hasError('required') && !this.userCtrl.hasError('minlength') && !this.userCtrl.hasError('maxlength') &&
    !this.contraCtrl.hasError('required') && !this.contraCtrl.hasError('minlength') && !this.contraCtrl.hasError('maxlength')&&
    !this.CorreoCtrl.hasError('required') && !this.CorreoCtrl.hasError('minlength') && !this.CorreoCtrl.hasError('maxlength')) 
    {
      
        console.log('nombre = ',this.newUsuario.strNombre)
        
        this.database.crearDoc(this.newUsuario,this.path,this.newUsuario.id);

        this.toastController.create({
          message: "USUARIO Registrado"
        }).then((loading)=>{
          loading.present();
          setTimeout(()=>{
          loading.dismiss();
          },3000)
        })
    }else{
      this.toastController.create({
        message: "Faltan llenar campos"
      }).then((loading)=>{
        loading.present();
        setTimeout(()=>{
        loading.dismiss();
        },3000)
      })
    }
  }

  //me salgo al home
  salir(){
    this.router.navigate(['/home']);
  }



}
