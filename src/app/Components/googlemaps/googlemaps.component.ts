import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GooglemapsService } from './googlemaps.service';
import { Geolocation } from '@capacitor/geolocation';
import { ActivatedRoute, Router ,NavigationExtras} from '@angular/router';


declare var google: any;


@Component({
  selector: 'app-googlemaps',
  templateUrl: './googlemaps.component.html',
  styleUrls: ['./googlemaps.component.scss'],
})
export class GooglemapsComponent implements OnInit {
      
   
   
   @Input() position = {   
            lat: -33.033482306658186,
            lng: -71.53321628883083
  }; 
  
  label={
      titulo:'Ubicacion',
      subtitulo:'Mi ubicación',
  }

  map:any;
  marker:any;
  infowindow:any;
  positionSet:any;
  lugar:any;
  

  @ViewChild('map') divMap: ElementRef;

  constructor(private renderer:Renderer2,
    @Inject(DOCUMENT) private document,
    private googlemapsService:GooglemapsService,
    public modalController:ModalController,
    private activeRoute:ActivatedRoute,
    private route:Router) { }

  ngOnInit():void {
    this.init();
    console.log('position ->', this.position)


  }

  async  init() {
    this.googlemapsService.init(this.renderer,this.document).then( () => {
        this.initMap();
    }).catch( (err) => {
        console.log(err);
    });
  }

  initMap() {

    const position1= this.position;

    let latLng = new google.maps.LatLng(position1.lat, position1.lng);

    let mapOptions = {
          center: latLng,
          zoom: 8,
          disableDefaultUI: true,
          clickableIcons: false,
    };
    
      this.map = new google.maps.Map(this.divMap.nativeElement, mapOptions);
      this.marker = new google.maps.Marker({
                  map: this.map,
                  animation: google.maps.Animation.DROP,
                  draggable: false,
      });
      //cargar ruta
      var objConfigDR={
            map:this.map
      }
      var objConfigDS={
            origin:latLng,
            destination:this.lugar,
            travelMode:google.maps.TravelMode.DRIVING
      }
      
      var ds = new google.maps.DirectionsService();
      var dr= new google.maps.DirectionsRenderer(objConfigDR);

      ds.route(objConfigDS,fnRutear);
      function fnRutear(resultados,status){
            if (status=='OK') {
                  dr.setDirections(resultados);
            }else{
                  alert('error'+status);
            }

      }
     
      
      

    this.clickHandleEvent();
    this.infowindow = new google.maps.InfoWindow();
    this.addMarker(position1);
    this.setInfoWindow(this.marker, this.label.titulo, this.label.subtitulo);

}

clickHandleEvent() {

    this.map.addListener('click', (event: any) => {
          const position = {
                lat: event.latLng.lat(),
                lng: event.latLng.lng(),
          };
          this.addMarker(position);
    });

}



addMarker(position: any):void {

    let latLng = new google.maps.LatLng(position.lat, position.lng);

    this.marker.setPosition(latLng);
    this.map.panTo(position);
    this.positionSet = position;

}


setInfoWindow(marker: any, titulo: string, subtitulo: string) {

    const contentString  =  '<div id="contentInsideMap">' +
                            '<div>' +
                            '</div>' +
                            '<p style="font-weight: bold ; margin-bottom: 5px; color=red;">' + titulo + '</p>' +
                            '<div id="bodyContent">' +
                            '<p class"normal m-0">'
                            + subtitulo + '</p>' +
                            '</div>' +
                            '</div>';
    this.infowindow.setContent(contentString);
    this.infowindow.open(this.map, marker);  

}
async mylocation() {

      console.log('mylocation() click')

      Geolocation.getCurrentPosition().then((res) => {

            console.log('mylocation() -> get ', res);

            const position = {
                  lat: res.coords.latitude,
                  lng: res.coords.longitude,
            }
            this.addMarker(position);

      });

      }

      aceptar() {
            console.log('click aceptar -> ', this.positionSet);
            this.modalController.dismiss({pos: this.positionSet})
      }




}


