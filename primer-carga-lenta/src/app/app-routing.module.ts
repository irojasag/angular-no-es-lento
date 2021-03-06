import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CharacterComponent } from './character/character.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { LayoutComponent } from './layout/layout.component';
import { LocationsComponent } from './locations/locations.component';

const routes: Routes = [
  {
    component: LayoutComponent,
    path: 'app',
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'characters',
        component: CharacterComponent,
      },
      {
        path: 'locations',
        component: LocationsComponent,
      },
      {
        path: 'episodes',
        component: EpisodesComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
