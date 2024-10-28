import { Routes } from '@angular/router';
import {
  HomeComponent,
  AboutComponent,
  PrivacyPolicyComponent,
  LicensingComponent,
} from './public';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'licensing', component: LicensingComponent },
];
