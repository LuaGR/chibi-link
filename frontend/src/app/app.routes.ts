import { Routes } from '@angular/router';
import { AboutComponent } from './public/about/about.component';
import { HomeComponent } from './public/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'app-about', component: AboutComponent },
];
