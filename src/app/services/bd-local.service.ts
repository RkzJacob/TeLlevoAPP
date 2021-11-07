import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { IAgenda } from '../interfaces/iagenda';

@Injectable({
  providedIn: 'root'
})
export class BdLocalService {

  agenda: IAgenda[]=[];
  error:any;
  
  private _storage: Storage | null = null;
  constructor(private storage: Storage ,public ToastController:ToastController) {
    this.init();
    this.cargarContactos();
  }

  async cargarContactos() {
    const miAgenda=await this.storage.get('agenda');
    if (miAgenda) {
      this.agenda=miAgenda;
      
    }
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
  }

  guardarContactos(nombre:string , nro:string){
     //crear una instrucción Lambda para asegurarme que el contacto no exista
    const existe=this.agenda.find(c=>c.strNombre===nombre);
    if (!existe) {
      this.agenda.unshift({strNombre:nombre,strNumero:nro})
      this._storage.set('agenda',this.agenda)
      this.presentToast("Usuario guardado")
    } else {
      this.presentToast("error,usuario no guardado")
      return this.error=false;
    }

  }

  async presentToast(mensaje:string) {

    const toast = await this.ToastController.create({

      message: mensaje,

      translucent:true,

      color:'medium',

      position: 'top',

      duration: 2000

    });

    toast.present();

  }
  

}
