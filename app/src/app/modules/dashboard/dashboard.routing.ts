import { Routes } from '@angular/router';

import { StarterComponent } from './starter/starter.component';
import { AuthGuard } from '../../auth.guard';

export const DashboardRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'starter', pathMatch: 'prefix' },
      { path: 'starter', component: StarterComponent }
    ]
  }
]