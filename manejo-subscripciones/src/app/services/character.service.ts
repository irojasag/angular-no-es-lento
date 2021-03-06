import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  public characters$: BehaviorSubject<any>;
  constructor(private http: HttpClient) {
    this.characters$ = new BehaviorSubject<any>(null);
  }

  public getAllCharacters() {
    this.http
      .get('https://rickandmortyapi.com/api/character')
      .subscribe((response) => {
        this.characters$.next(response);
      });
  }
}
