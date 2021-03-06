import { Component, OnInit } from '@angular/core';
import { EpisodeService } from 'src/app/services/episode.service';

@Component({
  selector: 'app-dashboard-episodes',
  templateUrl: './dashboard-episodes.component.html',
  styleUrls: ['./dashboard-episodes.component.scss'],
})
export class DashboardEpisodesComponent implements OnInit {
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
