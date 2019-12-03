import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardRoutes } from './dashboard.routing';
import { StarterComponent } from './starter/starter.component';
import { DemoMaterialModule } from '../../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [StarterComponent],
  imports: [
    RouterModule.forChild(DashboardRoutes),
    DemoMaterialModule,
    FlexLayoutModule,
    CommonModule
  ]
})
export class DashboardModule { }
