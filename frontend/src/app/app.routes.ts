import { Routes } from '@angular/router';
import { AboutComponent } from './public/about/about.component';
import { HomeComponent } from './public/home/home.component';
import { PrivacyPolicyComponent } from './public/privacy-policy/privacy-policy.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
];
