import { Routes } from '@angular/router';
import { AboutComponent } from './public/about/about.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'app-about', component: AboutComponent },
];
