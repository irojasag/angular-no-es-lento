import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { mockCharacters } from '../mock/characters.mock';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit {
  public response;

  constructor(private characterService: CharacterService) {
    this.characterService.characters$.subscribe((charactersResponse) => {
      console.log('SUB DE CHARACTERS');
      this.response = charactersResponse;
    });
  }

  ngOnInit(): void {
    this.characterService.getAllCharacters();
  }
}
