import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-dashboard-location',
  templateUrl: './dashboard-location.component.html',
  styleUrls: ['./dashboard-location.component.scss'],
})
export class DashboardLocationComponent implements OnInit {
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
