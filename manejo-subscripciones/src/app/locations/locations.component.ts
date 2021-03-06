import { Component, OnInit } from '@angular/core';
import { mockLocations } from '../mock/locations.mock';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
})
export class LocationsComponent implements OnInit {
  public response;

  constructor(private locationService: LocationService) {
    this.locationService.locations$.subscribe((locationsResponse) => {
      console.log('SUB DE LOCATION');
      this.response = locationsResponse;
    });
  }

  ngOnInit(): void {
    this.locationService.getAllLocations();
  }
}
