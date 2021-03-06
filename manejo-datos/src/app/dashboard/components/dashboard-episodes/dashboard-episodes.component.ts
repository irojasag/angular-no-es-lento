import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EpisodeService } from 'src/app/services/episode.service';

@Component({
  selector: 'app-dashboard-episodes',
  templateUrl: './dashboard-episodes.component.html',
  styleUrls: ['./dashboard-episodes.component.scss'],
})
export class DashboardEpisodesComponent implements OnInit {
  public response;
  public mostrar: boolean = true;
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

  public getCount(): number {
    console.log('CALCULA LA EPISODES');
    if (this.response) {
      let count = 0;
      this.response.results.forEach(() => (count = count + 1));
      return count;
    } else {
      return 0;
    }
  }

  ngOnInit(): void {
    this.episodeService.getAllEpisodes();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
