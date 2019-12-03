import { Routes } from '@angular/router';

import { OverviewComponent } from './overview/overview.component';

export const TodoRoutes: Routes = [
  {
    path: '',
    component: OverviewComponent,
    data: {
      title: 'Overview',
      urls: [
        { title: 'Overview', url: '/' },
        { title: 'Overview' }
      ]
    }

  }
]