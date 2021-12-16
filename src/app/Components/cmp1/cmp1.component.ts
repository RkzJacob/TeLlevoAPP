import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Contactos } from 'src/app/interfaces/contactos';
import { ContactoService } from 'src/app/services/contacto.service';


@Component({
  selector: 'app-cmp1',
  templateUrl: './cmp1.component.html',
  styleUrls: ['./cmp1.component.scss'],
})
export class Cmp1Component  implements OnInit{
  
  newContacto: Contactos={
      strNombre:'',
      strNro:null,
      id:this.database.getId(),
      fecha:new Date()
  };
  
  

  private path='Contacto/';
  userCtrl= new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(15)]);
  NroCtrl=new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(9)]);
  constructor(public database:ContactoService,public toastController: ToastController) { }

  ngOnInit(){

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
    if (this.NroCtrl.hasError('required')) {
      return 'Ingrese una contraseña';
    
    }
    else if(this.NroCtrl.hasError('minlength')){
      return 'Largo pequeño';
    }else if(this.NroCtrl.hasError('maxlength')){
      return 'Limite superado';
    }
  }

  guardarContacto(){
    if (!this.userCtrl.hasError('required') && !this.userCtrl.hasError('minlength') && !this.userCtrl.hasError('maxlength') &&
    !this.NroCtrl.hasError('required') && !this.NroCtrl.hasError('minlength') && !this.NroCtrl.hasError('maxlength')) {
      
    
      this.database.crearDoc(this.newContacto,this.path,this.newContacto.id);
  
      this.toastController.create({
        message: "Contacto Registrado"
      }).then((loading)=>{
        loading.present();
        setTimeout(()=>{
        loading.dismiss();
        },3000)
      })
    }else{
      this.toastController.create({
        message: "Debe llenar los campos correctamente"
      }).then((loading)=>{
        loading.present();
        setTimeout(()=>{
        loading.dismiss();
        },3000)
      })

    }
    
  }
  
  
  

}
