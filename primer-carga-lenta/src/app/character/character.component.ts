import { Component, OnInit } from '@angular/core';
import { mockCharacters } from '../mock/characters.mock';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit {
  public response = mockCharacters;
  constructor() {}

  ngOnInit(): void {}
}
