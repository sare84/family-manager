import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public http = `http://`;
  public apiUrl = `${this.http}${environment.api}:${environment.apiPort}`;
  public infoRoute = '/info';
  public authRoute = '/auth/login';

  getApiInfo() {
    return this.httpClient.get(`${this.apiUrl}${this.infoRoute}`);
  }

  login(username: string, password: string) {
    const url = `${this.apiUrl}${this.authRoute}`;
    return this.httpClient.post(url, { username, password }).toPromise();
  }

  constructor(public httpClient: HttpClient) { }
}
