import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodesRoutingModule } from './episodes-routing.module';
import { EpisodesComponent } from './episodes.component';
import { EpisodeCardComponent } from './components/episode-card/episode-card.component';

@NgModule({
  declarations: [EpisodesComponent, EpisodeCardComponent],
  imports: [CommonModule, EpisodesRoutingModule],
})
export class EpisodesModule {}
