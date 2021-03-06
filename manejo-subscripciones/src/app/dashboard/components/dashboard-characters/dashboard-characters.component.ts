import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-dashboard-characters',
  templateUrl: './dashboard-characters.component.html',
  styleUrls: ['./dashboard-characters.component.scss'],
})
export class DashboardCharactersComponent implements OnInit {
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
