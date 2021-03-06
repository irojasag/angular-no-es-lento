import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LocationsComponent } from './locations/locations.component';

const routes: Routes = [
  {
    component: LayoutComponent,
    path: 'app',
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'characters',
        loadChildren: () =>
          import('./character/character.module').then((m) => m.CharacterModule),
      },
      {
        path: 'locations',
        loadChildren: () =>
          import('./locations/locations.module').then((m) => m.LocationsModule),
      },
      {
        path: 'episodes',
        loadChildren: () =>
          import('./episodes/episodes.module').then((m) => m.EpisodesModule),
      },
      {
        path: 'about',
        loadChildren: () =>
          import('./about/about.module').then((m) => m.AboutModule),
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('./contact/contact.module').then((m) => m.ContactModule),
      },
      {
        path: '**',
        redirectTo: 'dashboard',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'app',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
