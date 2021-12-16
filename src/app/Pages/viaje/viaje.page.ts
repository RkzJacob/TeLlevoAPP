import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router ,NavigationExtras} from '@angular/router';
import { ToastController } from '@ionic/angular';
import randomInteger from 'random-int';
import { Viaje } from 'src/app/interfaces/viaje';
import { ContactoService } from 'src/app/services/contacto.service';


@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.page.html',
  styleUrls: ['./viaje.page.scss'],
})

export class ViajePage implements OnInit {
  lugar:string;
  

  newViaje: Viaje={
    strDestino:'',
    strTarifa:0,
    id:this.database.getId()
};

private path='Ruta/';
  
  r=randomInteger(1000, 2000);
  

  constructor(private activeRoute: ActivatedRoute,private router: Router,private database:ContactoService,public toastController: ToastController) {

    this.activeRoute.queryParams.subscribe(params=>{
      if(this.router.getCurrentNavigation().extras.state){
        this.lugar=this.router.getCurrentNavigation().extras.state.lugar;
        console.log(this.lugar)
      }
    })
   }
  

  ngOnInit() {
    
  }
  

  salir(){
    this.router.navigate(['/api']);
  }
  aceptar(){
    this.newViaje.strDestino=this.lugar;
    this.newViaje.strTarifa=this.r;
    if (this.newViaje.strDestino!='' && this.newViaje.strTarifa!=0) {
      
      this.database.crearDoc(this.newViaje,this.path,this.newViaje.id);
      this.router.navigate(['/pagina-principal']);
      
      this.toastController.create({
        message: "Viaje guardado"
      }).then((loading)=>{
        loading.present();
        setTimeout(()=>{
        loading.dismiss();
        },3000)
      })
      
    } else {
      this.toastController.create({
        message: "No se puede guardar el viaje"
      }).then((loading)=>{
        loading.present();
        setTimeout(()=>{
        loading.dismiss();
        },3000)
      })
      
    }
    
  }
}
