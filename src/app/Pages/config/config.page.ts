import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
})
export class ConfigPage implements OnInit {
  
  NombreUserxd: any ;
//creo componentes de los import que usare
  constructor(private activeRoute: ActivatedRoute,private router: Router) { 
    //llamo a la ruta activa y obtengo los parametros
    this.activeRoute.queryParams.subscribe(params=>{
      if(this.router.getCurrentNavigation().extras.state){
        this.NombreUserxd=this.router.getCurrentNavigation().extras.state.NombreUserxd;
        console.log(this.NombreUserxd)
      }
    })
  }

  //cambio de evento en el config.html en el segment
  segmentChanged($event){
    let direccion=$event.detail.value
    this.router.navigate(['config/'+direccion])
  }

  //inicializar metodos async
  ngOnInit() {

  }
  //metodo para ir a la pagina principal
  salir(){
    this.router.navigate(['/pagina-principal']);
  }
  
}
