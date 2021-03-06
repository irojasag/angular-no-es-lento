import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  public locations$: BehaviorSubject<any>;
  public locations: any;
  constructor(private http: HttpClient) {
    this.locations$ = new BehaviorSubject<any>(null);
  }

  public getAllLocations(force?: boolean) {
    if (force || !this.locations) {
      this.http
        .get('https://rickandmortyapi.com/api/location')
        .subscribe((response) => {
          this.locations$.next(response);
          this.locations = response;
        });
    }
  }
}
