import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoRoutes } from './todo.routing';

import { OverviewComponent } from './overview/overview.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [OverviewComponent],
  imports: [
    RouterModule.forChild(TodoRoutes),
    CommonModule
  ]
})
export class TodoModule { }
