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
  n1:any;
  n2:any;
  n3:any;
  n4:any;
  n5:any;
  n6:any;
  ubicacion:null;
  
  constructor(private api:ApiService,private router:Router,private modalController:ModalController) { }

  ionViewWillEnter(){
    this.getRegiones()
    this.getProvincias()
   
  }


  getRegiones(){
    this.api.getRegion().subscribe((data)=>{
      this.n2=data;
    });

  }
  getProvincias(){
    this.api.getProvincias(this.n3).subscribe((data)=>{
      this.n5=data;
      
    });
  }
  salir(){
    this.router.navigate(['/pagina-principal']);
  }
  ngOnInit() {
  }

  async agregarDireccion() {

    const ubicacion = this.ubicacion;
    let positionInput = {  
      lat:0,
      lng:0,
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
