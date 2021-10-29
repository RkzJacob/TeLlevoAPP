import { Component, OnInit } from '@angular/core';
import { BdLocalService } from 'src/app/services/bd-local.service';

@Component({
  selector: 'app-cmp2',
  templateUrl: './cmp2.component.html',
  styleUrls: ['./cmp2.component.scss'],
})
export class Cmp2Component implements OnInit {
  nombre:string;
  nro:string;
  constructor(private bdLocal:BdLocalService) { }
  guardar(){
    this.bdLocal.guardarContactos(this.nombre,this.nro);
  }
  ngOnInit() {}

}
