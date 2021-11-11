import { Injectable } from '@angular/core';


declare var google:any;

@Injectable({
  providedIn: 'root'
})
export class GooglemapsService {

  apiKey='AIzaSyA2yDsOwYlTVfyk-3hvh3hdYXbMAIt2JBI';
  mapsLoaded =false; 


  constructor() { }

  init(renderer:any,document:any): Promise<any>{ 
    
    return new Promise((resolve)=>{
      if(this.mapsLoaded ){
        console.log('ya ha sido cargado el mapa')
        resolve(true);
        return;
      }


      const script =renderer.createElement('script');
      script.id = 'googleMaps';

      window['mapInit'] = () => {
        this.mapsLoaded  = true;
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
