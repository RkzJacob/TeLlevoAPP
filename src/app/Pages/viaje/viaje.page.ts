import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router ,NavigationExtras} from '@angular/router';
import randomInteger from 'random-int';


@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.page.html',
  styleUrls: ['./viaje.page.scss'],
})

export class ViajePage implements OnInit {
  lugar:any;
  random:boolean;
  
  r=randomInteger(1000, 2000);
  

  constructor(private activeRoute: ActivatedRoute,private router: Router) {

    this.activeRoute.queryParams.subscribe(params=>{
      if(this.router.getCurrentNavigation().extras.state){
        this.lugar=this.router.getCurrentNavigation().extras.state.lugar;
        console.log(this.lugar)
      }
    })
   }
  

  ngOnInit() {
    
  }
  

  salir(){
    this.router.navigate(['/api']);
  }
  aceptar(){
    this.router.navigate(['/pagina-principal']);
  }
}
