import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoRoutes } from './todo.routing';

import { OverviewComponent } from './overview/overview.component';
import { RouterModule } from '@angular/router';
import { DemoMaterialModule } from '../../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [OverviewComponent],
  imports: [
    RouterModule.forChild(TodoRoutes),
    DemoMaterialModule,
    FlexLayoutModule,
    CommonModule
  ]
})
export class TodoModule { }
