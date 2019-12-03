import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';
import { Observable } from 'rxjs';


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

  login(username: string, password: string): boolean{
    const url = `${this.apiUrl}${this.authRoute}`;

    this.httpClient.post(url, { username, password }).subscribe(result => {
      const token = _.get(result, 'access_token');
      localStorage.setItem('token', token); 
    });
    if (!_.isEmpty(this.getToken())) {
      localStorage.setItem('username', username);
      return true;
    } else {
      return false;
    }
  
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
