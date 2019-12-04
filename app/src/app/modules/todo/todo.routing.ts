import { Routes } from '@angular/router';

import { OverviewComponent } from './overview/overview.component';
import { AuthGuard } from '../../auth.guard';

export const TodoRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'prefix'  },
      { path: 'overview', component: OverviewComponent } 
    ]
  }
]