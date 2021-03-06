import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-dashboard-characters',
  templateUrl: './dashboard-characters.component.html',
  styleUrls: ['./dashboard-characters.component.scss'],
})
export class DashboardCharactersComponent implements OnInit, OnDestroy {
  public response;
  private subscriptions: Subscription;
  constructor(private characterService: CharacterService) {
    this.subscriptions = new Subscription();
    this.subscriptions.add(
      this.characterService.characters$.subscribe((charactersResponse) => {
        console.log('SUB DE CHARACTERS');
        this.response = charactersResponse;
      })
    );
  }

  ngOnInit(): void {
    this.characterService.getAllCharacters();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
