import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router ,NavigationExtras} from '@angular/router';


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
  //me salgo al home
  salir(){
    this.router.navigate(['/home']);
  }
  //paso el dato ya guardado
  config(){
    let navigationExtra: NavigationExtras={
      state:{NombreUserxd: this.NombreUser}
    }
    this.router.navigate(['/config'],navigationExtra);
  }
  

}
