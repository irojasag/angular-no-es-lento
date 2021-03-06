import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationsRoutingModule } from './locations-routing.module';
import { LocationsComponent } from './locations.component';
import { LocationCardComponent } from './components/location-card/location-card.component';

@NgModule({
  declarations: [LocationsComponent, LocationCardComponent],
  imports: [CommonModule, LocationsRoutingModule],
})
export class LocationsModule {}
