import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recupera-cuenta',
  templateUrl: './recupera-cuenta.page.html',
  styleUrls: ['./recupera-cuenta.page.scss'],
})
export class RecuperaCuentaPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  salir(){
    this.router.navigate(['/home']);
  }
  

}
