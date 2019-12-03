import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { TodoModule } from './modules/todo/todo.module';

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    canActivate : [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
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
