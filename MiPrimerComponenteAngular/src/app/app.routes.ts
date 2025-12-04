import { Routes } from '@angular/router';
import { ContadorComponent } from './pages/contador/contador';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'contador',
    component: ContadorComponent,
  },
  {
    path: 'about',
    component: About,
  },
];
