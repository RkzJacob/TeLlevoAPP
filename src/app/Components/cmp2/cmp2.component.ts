import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contactos } from 'src/app/interfaces/contactos';
import { ContactoService } from 'src/app/services/contacto.service';



@Component({
  selector: 'app-cmp2',
  templateUrl: './cmp2.component.html',
  styleUrls: ['./cmp2.component.scss'],
})
export class Cmp2Component implements OnInit {

  contactos: Contactos[]=[];

  newContacto: Contactos={
    strNombre:'',
    strNro:null,
    id:this.database.getId(),
    fecha:new Date()
  }
  private path='Contacto/';
  constructor(private router:Router,public database:ContactoService) { }
  ionViewWillEnter(){
    
  }

  ngOnInit() {
    this.getContactos();
  }

  getContactos(){
    this.database.getCollection<Contactos>(this.path).subscribe(   res => {
        this.contactos =res;
    });

  }

}
