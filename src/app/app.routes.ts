import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'rsl-srch',
    loadComponent: () => import('./pages/rsl-srch/rsl-srch.page').then( m => m.RslSrchPage)
  },
  {
    path: 'rml-srch',
    loadComponent: () => import('./pages/rml-srch/rml-srch.page').then( m => m.RmlSrchPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'key',
    loadComponent: () => import('./pages/key/key.page').then( m => m.KeyPage)
  },
  {
    path: 'info',
    loadComponent: () => import('./pages/info/info.page').then( m => m.InfoPage)
  },
  {
    path: 'tutorial',
    loadComponent: () => import('./pages/tutorial/tutorial.page').then( m => m.TutorialPage)
  },
  {
    path: 'favorites',
    loadComponent: () => import('./pages/favorites/favorites.page').then( m => m.FavoritesPage)
  },
  {
    path: 'disclaimer',
    loadComponent: () => import('./pages/disclaimer/disclaimer.page').then( m => m.DisclaimerPage)
  },
  {
    path: 'contacts',
    loadComponent: () => import('./pages/contacts/contacts.page').then( m => m.ContactsPage)
  },
  {
    path: 'recent-srch',
    loadComponent: () => import('./pages/recent-srch/recent-srch.page').then( m => m.RecentSrchPage)
  },
  {
    path: 'rsl-srch-scenarios',
    loadComponent: () => import('./pages/rsl-srch-scenarios/rsl-srch-scenarios.page').then( m => m.RslSrchScenariosPage)
  },
  {
    path: 'rsl-srch-thqtr',
    loadComponent: () => import('./pages/rsl-srch-thqtr/rsl-srch-thqtr.page').then( m => m.RslSrchThqtrPage)
  },
  {
    path: 'rsl-srch-media',
    loadComponent: () => import('./pages/rsl-srch-media/rsl-srch-media.page').then( m => m.RslSrchMediaPage)
  },
  {
    path: 'rsl-srch-results',
    loadComponent: () => import('./pages/rsl-srch-results/rsl-srch-results.page').then( m => m.RslSrchResultsPage)
  },
  {
    path: 'info-rml',
    loadComponent: () => import('./pages/info-rml/info-rml.page').then( m => m.InfoRmlPage)
  },
  {
    path: 'info-rsl',
    loadComponent: () => import('./pages/info-rsl/info-rsl.page').then( m => m.InfoRslPage)
  },
  {
    path: 'info-gen',
    loadComponent: () => import('./pages/info-gen/info-gen.page').then( m => m.InfoGenPage)
  },
  {
    path: 'rml-srch-thqtr',
    loadComponent: () => import('./pages/rml-srch-thqtr/rml-srch-thqtr.page').then( m => m.RmlSrchThqtrPage)
  },
  {
    path: 'rml-srch-scenarios',
    loadComponent: () => import('./pages/rml-srch-scenarios/rml-srch-scenarios.page').then( m => m.RmlSrchScenariosPage)
  },
  {
    path: 'rml-srch-media',
    loadComponent: () => import('./pages/rml-srch-media/rml-srch-media.page').then( m => m.RmlSrchMediaPage)
  },
  {
    path: 'rml-srch-results',
    loadComponent: () => import('./pages/rml-srch-results/rml-srch-results.page').then( m => m.RmlSrchResultsPage)
  },
  {
    path: 'recent-srch-results',
    loadComponent: () => import('./pages/recent-srch-results/recent-srch-results.page').then( m => m.RecentSrchResultsPage)
  },
  {
    path: 'srch-results',
    loadComponent: () => import('./pages/srch-results/srch-results.page').then( m => m.SrchResultsPage)
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
