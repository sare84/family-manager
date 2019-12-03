import { Routes } from '@angular/router';

import { StarterComponent } from './starter/starter.component';

export const DashboardRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'starter', pathMatch: 'prefix' },
      { path: 'starter', component: StarterComponent }
    ]
  }
]