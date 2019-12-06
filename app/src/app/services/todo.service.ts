import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Todo } from '../models/todo.class';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(public httpClient: HttpClient) { }
  
  public http = `http://`;
  public apiUrl = `${this.http}${environment.api}:${environment.apiPort}`;
  public todoRoute = '/todo';

  getList(): Observable<Array<Todo>> {
    const url = `${this.apiUrl}${this.todoRoute}`;
    return this.httpClient.get<Array<Todo>>(url);  
  }
  
}
