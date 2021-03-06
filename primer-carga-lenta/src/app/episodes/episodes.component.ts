import { Component, OnInit } from '@angular/core';
import { mockEpisodes } from '../mock/episodes.mock';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss'],
})
export class EpisodesComponent implements OnInit {
  public response = mockEpisodes;
  constructor() {}

  ngOnInit(): void {}
}
