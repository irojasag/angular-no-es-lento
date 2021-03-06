import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EpisodeService {
  public episodes$: BehaviorSubject<any>;
  public episodes: any;
  constructor(private http: HttpClient) {
    this.episodes$ = new BehaviorSubject<any>(null);
  }

  public getAllEpisodes(force?: boolean) {
    if (force || !this.episodes) {
      this.http
        .get('https://rickandmortyapi.com/api/episode')
        .subscribe((response) => {
          this.episodes$.next(response);
          this.episodes = response;
        });
    }
  }
}
