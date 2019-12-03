import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { TodoModule } from './modules/todo/todo.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => DashboardModule
      },
      {
        path: 'todo',
        loadChildren: () => TodoModule
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
  }
];
