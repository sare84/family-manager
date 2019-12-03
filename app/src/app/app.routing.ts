import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { TodoModule } from './modules/todo/todo.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'prefix'
  },
  {
    path: '',
    component: FullComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'todo',
        loadChildren: () => TodoModule
      },
      {
        path: 'dashboard',
        loadChildren: () => DashboardModule
      },
    ]
  },

  {
    path: 'login',
    component: LoginComponent,
  },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];
