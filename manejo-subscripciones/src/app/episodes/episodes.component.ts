import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { mockEpisodes } from '../mock/episodes.mock';
import { EpisodeService } from '../services/episode.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss'],
})
export class EpisodesComponent implements OnInit {
  public response;
  private subscriptions: Subscription;
  constructor(private episodeService: EpisodeService) {
    this.subscriptions = new Subscription();
    this.subscriptions.add(
      this.episodeService.episodes$.subscribe((episodesResponse) => {
        console.log('SUB DE EPISODES');
        this.response = episodesResponse;
      })
    );
  }

  ngOnInit(): void {
    this.episodeService.getAllEpisodes();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
