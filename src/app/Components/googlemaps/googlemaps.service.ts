import { Injectable } from '@angular/core';
declare var google:any;
@Injectable({
  providedIn: 'root'
})
export class GooglemapsService {

  apiKey='AIzaSyBQphcqDrKtqz40kEw6NIYaASohpQ_-71w';
  cargarMapa=false;


  constructor() { }

  init(renderer:any,doucment:any): Promise<any>{
    return new Promise((resolve)=>{
      if(this.cargarMapa){
        console.log('ya ha sido cargado el mapa')
        resolve(true);
        return;
      }
      const script =renderer.createElement('script');
      script.id = 'googleMaps';

      window['mapInit'] = () => {
        this.cargarMapa = true;
        if (google) {
           console.log('google is loaded')
        } else {
           console.log('google is not Defined')
        }
        resolve(true);
        return;
    }
    if(this.apiKey){
        script.src = 'https://maps.googleapis.com/maps/api/js?key=' + this.apiKey + '&callback=mapInit';
    } else {
        script.src = 'https://maps.googleapis.com/maps/api/js?callback=mapInit';       
    }

    renderer.appendChild(document.body, script);

    });
  }
}
