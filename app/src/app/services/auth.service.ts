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

  public static tokenKey = 'token';

  login(username: string, password: string): Observable<any>{
    const url = `${this.apiUrl}${this.authRoute}`;
    return this.httpClient.post<User>(url, {username, password});  
  }

  getProfile(): Observable<User> {
    const url = `${this.apiUrl}${this.profileRoute}`;
    return this.httpClient.get<User>(url);  
  }

  getToken(): string {
    return localStorage.getItem(AuthService.tokenKey);
  }

  setToken(token: string): void {
    localStorage.setItem(AuthService.tokenKey, token);
  }

  deleteToken(): void {
    localStorage.removeItem(AuthService.tokenKey);
  }



  constructor(public httpClient: HttpClient) { }
}
