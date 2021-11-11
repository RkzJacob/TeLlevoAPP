import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { ModalController } from '@ionic/angular';
import { GooglemapsComponent } from 'src/app/Components/googlemaps/googlemaps.component';




@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
})
export class ApiPage implements OnInit {
  

  ubicacion=null;
  
  constructor(private api:ApiService,private router:Router,private modalController:ModalController) { }

  ionViewWillEnter(){
   
  }


  
  
  salir(){
    this.router.navigate(['/pagina-principal']);
  }
  ngOnInit() {
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
      componentProps: {position: positionInput}
    });
    await modalAdd.present();

  }


}
