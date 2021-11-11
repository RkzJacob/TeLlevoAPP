import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { HomePage } from '../pages/home/home.page';
import { BdLocalService } from '../services/bd-local.service';




@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authservice :AuthService
    ,private route:Router){}

    canActivate(): boolean {
      if (this.authservice.loggedIn()) {
        console.log('false')
        this.route.navigate(['/not-found'])
        return false
        
      } else {
        console.log('true')            
        return true
      }
    }
}
