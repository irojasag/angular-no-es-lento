import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  public characters$: BehaviorSubject<any>;
  public characters: any;

  constructor(private http: HttpClient) {
    this.characters$ = new BehaviorSubject<any>(null);
  }

  public getAllCharacters(force?: boolean) {
    if (force || !this.characters) {
      this.http
        .get('https://rickandmortyapi.com/api/character')
        .subscribe((response) => {
          this.characters$.next(response);
          this.characters = response;
        });
    }
  }
}
