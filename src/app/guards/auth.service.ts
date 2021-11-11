import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
    private _router: Router) { }

  getUser() {
    const guardado =localStorage.getItem('agenda');
    console.log('objetoObtenido: ', JSON.parse(guardado))
    return localStorage.getItem('agenda')
    
  }

  loggedIn() {
    const guardado =localStorage.getItem('agenda')
    console.log('objetoObtenido: ', JSON.parse(guardado))
    return !!localStorage.getItem('agenda') 
  }

}
