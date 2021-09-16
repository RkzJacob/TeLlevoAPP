import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.page.html',
  styleUrls: ['./pagina-principal.page.scss'],
})
export class PaginaPrincipalPage implements OnInit {
  NombreUser: any;//recibe un parametros string del home
  constructor(private activeRoute: ActivatedRoute,private router: Router) { 
    //llamo a la ruta activa y obtengo los parametros
    this.activeRoute.queryParams.subscribe(params=>{
      if(this.router.getCurrentNavigation().extras.state){
        this.NombreUser=this.router.getCurrentNavigation().extras.state.NombreUser;
        console.log(this.NombreUser)
      }
    })
  }
  
  ngOnInit() {
  }
  salir(){
    this.router.navigate(['/home']);
  }
  

}
