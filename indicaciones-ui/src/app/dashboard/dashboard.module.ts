import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardCharactersComponent } from './components/dashboard-characters/dashboard-characters.component';
import { DashboardEpisodesComponent } from './components/dashboard-episodes/dashboard-episodes.component';
import { DashboardLocationComponent } from './components/dashboard-location/dashboard-location.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardCharactersComponent,
    DashboardEpisodesComponent,
    DashboardLocationComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class DashboardModule {}
