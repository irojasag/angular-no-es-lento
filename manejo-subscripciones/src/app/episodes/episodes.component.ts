import { Component, OnInit } from '@angular/core';
import { mockEpisodes } from '../mock/episodes.mock';
import { EpisodeService } from '../services/episode.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss'],
})
export class EpisodesComponent implements OnInit {
  public response;

  constructor(private episodeService: EpisodeService) {
    this.episodeService.episodes$.subscribe((episodesResponse) => {
      console.log('SUB DE EPISODE');
      this.response = episodesResponse;
    });
  }

  ngOnInit(): void {
    this.episodeService.getAllEpisodes();
  }
}
