import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./public/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./public/about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'privacy-policy',
    loadComponent: () =>
      import('./public/privacy-policy/privacy-policy.component').then(
        (m) => m.PrivacyPolicyComponent
      ),
  },
  {
    path: 'licensing',
    loadComponent: () =>
      import('./public/licensing/licensing.component').then(
        (m) => m.LicensingComponent
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./public/page-not-found/page-not-found.component').then(
        (m) => m.PageNotFoundComponent
      ),
  },
];
