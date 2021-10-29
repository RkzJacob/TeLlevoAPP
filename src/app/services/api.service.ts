import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { retry,catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' :'*'
    })
  }
   




  apiURL= 'https://apis.digital.gob.cl/dpa';
  constructor(private http:HttpClient) { }

  ///obtener todas las regiones
  getRegion():Observable<any>{
    return this.http.get(this.apiURL+'/regiones/').pipe(
      retry(3)
    );
  }

  ///obtener una region en especifico
  getRegionId(regionindex):Observable<any>{
    return this.http.get(this.apiURL+'/regiones/'+regionindex).pipe(
      retry(3)
    );
  }
  ////obtener provincias de una region
  getProvincias(regionindex):Observable<any>{
    return this.http.get(this.apiURL+'/regiones/'+regionindex+'/provincias').pipe(
      retry(3)
    );
  }
  CreatePost(post):Observable<any>{
    return this.http.post(this.apiURL+'/regiones/',post,this.httpOptions).pipe(
      retry(3)
    );
  }
  UpdatePost(post,id):Observable<any>{
    return this.http.post(this.apiURL+'/regiones/',post,this.httpOptions).pipe(
      retry(3)
    );
  }

}
