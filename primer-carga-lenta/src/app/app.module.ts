import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardLocationComponent } from './dashboard-location/dashboard-location.component';
import { DashboardCharactersComponent } from './dashboard-characters/dashboard-characters.component';
import { DashboardEpisodesComponent } from './dashboard-episodes/dashboard-episodes.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { CharacterComponent } from './character/character.component';
import { CharacterCardComponent } from './character-card/character-card.component';
import { LocationsComponent } from './locations/locations.component';
import { LocationCardComponent } from './location-card/location-card.component';

@NgModule({
  declarations: [AppComponent, LayoutComponent, DashboardComponent, DashboardLocationComponent, DashboardCharactersComponent, DashboardEpisodesComponent, ContactComponent, AboutComponent, CharacterComponent, CharacterCardComponent, LocationsComponent, LocationCardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
