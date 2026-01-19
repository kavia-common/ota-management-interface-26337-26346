import { Routes } from '@angular/router';
import { loadRemote } from '@module-federation/enhanced/runtime';

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      loadRemote('login/Routes').then((m: any) => m.LOGIN_ROUTES),
  },
  {
    path: 'user',
    loadChildren: () =>
      loadRemote('te-user/Routes').then((m: any) => m.remoteRoutes),
  },
  {
    path: 'ota',
    loadChildren: () =>
      loadRemote('te-ota/Routes').then((m: any) => m.remoteRoutes),
  },
];
