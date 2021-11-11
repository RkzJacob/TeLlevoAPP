import { Component, OnInit } from '@angular/core';
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

  constructor(public database:ContactoService) { }

  ngOnInit(){

  }

  guardarContacto(){
    console.log('nombre = ',this.newContacto.strNombre)
    
    this.database.crearDoc(this.newContacto,this.path,this.newContacto.id);
  }
  
  
  

}
