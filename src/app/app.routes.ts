import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        redirectTo: 'candidate-profile',
        pathMatch: 'full',
      },
    ],
  },
];
