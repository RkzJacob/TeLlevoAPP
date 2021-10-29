import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
})
export class ConfigPage implements OnInit {
  NombreUserxd: any ;
  constructor(private activeRoute: ActivatedRoute,private router: Router) { 
    //llamo a la ruta activa y obtengo los parametros
    this.activeRoute.queryParams.subscribe(params=>{
      if(this.router.getCurrentNavigation().extras.state){
        this.NombreUserxd=this.router.getCurrentNavigation().extras.state.NombreUserxd;
        console.log(this.NombreUserxd)
      }
    })
  }
  segmentChanged($event){
    let direccion=$event.detail.value
    this.router.navigate(['config/'+direccion])
  }
  ngOnInit() {
  }
  salir(){
    this.router.navigate(['/pagina-principal']);
  }
}
