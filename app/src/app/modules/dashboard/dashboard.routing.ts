import { Routes } from '@angular/router';
import { StarterComponent } from './starter/starter.component';

export const DashboardRoutes: Routes = [
  {
    path: '',
    component: StarterComponent,
    data: {
      title: 'Overview',
      urls: [
        { title: 'Overview', url: '/' },
        { title: 'Overview' }
      ]
    }
  }
]