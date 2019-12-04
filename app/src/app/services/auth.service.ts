import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { User } from '../models/user.class';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public http = `http://`;
  public apiUrl = `${this.http}${environment.api}:${environment.apiPort}`;
  public infoRoute = '/info';
  public authRoute = '/auth/login';
  public profileRoute = '/profile';

  getApiInfo() {
    return this.httpClient.get(`${this.apiUrl}${this.infoRoute}`);
  }

  login(username: string, password: string): Observable<any>{
    const url = `${this.apiUrl}${this.authRoute}`;
    return this.httpClient.post<User>(url, {username, password});  
  }

  getProfile() {
    const url = `${this.apiUrl}${this.profileRoute}`;
    return this.httpClient.get(url).toPromise();  
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  constructor(public httpClient: HttpClient) { }
}
