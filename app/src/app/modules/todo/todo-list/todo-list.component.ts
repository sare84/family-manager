import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, selectTodoState } from '../../../store/state/app.state';
import { Observable } from 'rxjs';
import { Todo } from '../../../models/todo.class';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public getState: Observable<any>;
  public list: Array<Todo> = null;

  constructor(private store: Store<AppState>) {
    this.getState = this.store.select(selectTodoState);
  }

  ngOnInit() {
    this.getState.subscribe((state) => {
      this.list = state.todoList;
    });
  }

  
}
