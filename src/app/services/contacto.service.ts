import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Contactos } from '../interfaces/contactos';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor(private b2:AngularFirestore) { }
  
  //crear coleccion
  crearDoc(data:any,path:string,id:string){
    const collection= this.b2.collection(path);
    return collection.doc(id).set(data);
  }
  //obtener coleccion
  obtenerDoc(path:string ,id:string){
    const collection= this.b2.collection(path);
    return collection.doc(id).valueChanges();
  }
  //eliminar una coleccion
  eliminarDoc(path:string ,id:string){
    const collection= this.b2.collection(path);
    return collection.doc(id).delete();
  }
  //actualizar
  actualizarDoc(data:any,path:string ,id:string){
    const collection= this.b2.collection(path);
    return collection.doc(id).update(data);

  }
  getId(){
    return this.b2.createId();
  }
  getCollection<tipo>(path:string){
    const collection= this.b2.collection<tipo>(path);
    return collection.valueChanges(); 

  }
  

  
}
