import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';



@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
})
export class ApiPage implements OnInit {
  n1:any;
  n2:any;
  n3:any;
  n4:any;
  n5:any;
  n6:any;
  constructor(private api:ApiService,private router:Router) { }
  ionViewWillEnter(){
    this.getRegiones()
    this.getProvincias()
  }

  getRegiones(){
    this.api.getRegion().subscribe((data)=>{
      this.n2=data;
    });

  }
  getProvincias(){
    this.api.getProvincias(this.n3).subscribe((data)=>{
      this.n5=data;
      
    });
  }
  salir(){
    this.router.navigate(['/pagina-principal']);
  }
  ngOnInit() {
  }


}
