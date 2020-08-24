import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient ) { }

  private url = 'http://localhost:3000';
  private header = new HttpHeaders();

  enviarFirmaColegio(body) {
    // console.log(body);
    return this.http.post(`${this.url}/boleta/aplicacion-colegio`, body);
  }

  eviarFirmaSiremu(body) {
    return this.http.post(`${this.url}/boleta/aplicacion-eba`, body);
  }

  enviarFirmaEba(body) {
    return this.http.post(`${this.url}/boleta/aplicacion-siremu`, body);
  }

}
