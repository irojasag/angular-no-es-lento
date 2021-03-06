import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  public locations$: BehaviorSubject<any>;
  constructor(private http: HttpClient) {
    this.locations$ = new BehaviorSubject<any>(null);
  }

  public getAllLocations() {
    this.http
      .get('https://rickandmortyapi.com/api/location')
      .subscribe((response) => {
        this.locations$.next(response);
      });
  }
}
