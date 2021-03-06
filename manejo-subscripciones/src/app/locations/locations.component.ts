import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { mockLocations } from '../mock/locations.mock';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
})
export class LocationsComponent implements OnInit {
  public response;
  private subscriptions: Subscription;
  constructor(private locationService: LocationService) {
    this.subscriptions = new Subscription();
    this.subscriptions.add(
      this.locationService.locations$.subscribe((locationsResponse) => {
        console.log('SUB DE LOCATIONS');
        this.response = locationsResponse;
      })
    );
  }

  ngOnInit(): void {
    this.locationService.getAllLocations();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
