import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public http = `http://`;
  public apiUrl = `${this.http}${environment.api}:${environment.apiPort}`;
  public infoRoute = '/info';

  getApiInfo() {
    return this.httpClient.get(`${this.apiUrl}${this.infoRoute}`);
  }

  constructor(public httpClient: HttpClient) {
    console.log('constructor api')
   }
}
