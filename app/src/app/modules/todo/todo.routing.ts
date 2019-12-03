import { Routes } from '@angular/router';

import { OverviewComponent } from './overview/overview.component';

export const TodoRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'prefix'  },
      { path: 'overview', component: OverviewComponent } 
    ]
  }
]