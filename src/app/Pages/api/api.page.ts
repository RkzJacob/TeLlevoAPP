import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { ModalController } from '@ionic/angular';
import { GooglemapsComponent } from 'src/app/Components/googlemaps/googlemaps.component';
import { ContactoService } from 'src/app/services/contacto.service';
import { Conductores } from 'src/app/interfaces/conductores';




@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
})
export class ApiPage implements OnInit {
  cnd:any;

  conductores: Conductores[]=[];

  newConductor: Conductores={
    strNombre:'',
    strApellido:'',
    id:this.database.getId()
  }
  private path='Conductor/';

  ubicacion=null;
  lugar:any;
  
  
  constructor(private api:ApiService,private router:Router,private modalController:ModalController,public database:ContactoService) { }

  ionViewWillEnter(){
   
  }

  salir(){
    this.router.navigate(['/pagina-principal']);
  }
  
  ngOnInit() {
    this.getContactos();
  }
  
  async agregarDireccion() {
    const ubicacion = this.ubicacion;
    let positionInput = {  
        lat: -33.033482306658186,
        lng: -71.53321628883083
  };
    if (ubicacion !== null) {
        positionInput = ubicacion; 
    }

    const modalAdd  = await this.modalController.create({
      component: GooglemapsComponent,
      mode: 'ios',
      swipeToClose: true,
      componentProps: {position: positionInput,lugar:this.lugar},
      
      
    });
    await modalAdd.present();

  }
  getContactos(){
    this.database.getCollection<Conductores>(this.path).subscribe(   res => {
        this.conductores =res;
    });

  }
  Viajar(){
    
    //guardo los datos del nombre de usuario
    let navigationExtra: NavigationExtras={
      state:{lugar: this.lugar}
    }
    this.router.navigate(['/viaje'],navigationExtra);
    
  }




}
