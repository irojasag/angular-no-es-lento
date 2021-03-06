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
  public mostrar: boolean = true;
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

  public getCount(): number {
    console.log('CALCULA LA CHARACTERS');
    if (this.response) {
      let count = 0;
      this.response.results.forEach(() => (count = count + 1));
      return count;
    } else {
      return 0;
    }
  }

  ngOnInit(): void {
    this.characterService.getAllCharacters();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
