import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoRoutes } from './todo.routing';

import { OverviewComponent } from './overview/overview.component';
import { RouterModule } from '@angular/router';
import { DemoMaterialModule } from '../../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  declarations: [OverviewComponent, TodoListComponent],
  imports: [
    RouterModule.forChild(TodoRoutes),
    DemoMaterialModule,
    FlexLayoutModule,
    CommonModule,
    MatToolbarModule
  ]
})
export class TodoModule { }
