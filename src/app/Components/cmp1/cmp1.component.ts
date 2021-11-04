import { Component, OnInit } from '@angular/core';
import { BdLocalService } from 'src/app/services/bd-local.service';
import {Geolocation} from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-cmp1',
  templateUrl: './cmp1.component.html',
  styleUrls: ['./cmp1.component.scss'],
})
export class Cmp1Component  {

  nombre:string;
  nro:string;


  constructor(private bdLocal:BdLocalService,private geolocation:Geolocation) { }
  guardar(){
    this.bdLocal.guardarContactos(this.nombre,this.nro);
  }


}
