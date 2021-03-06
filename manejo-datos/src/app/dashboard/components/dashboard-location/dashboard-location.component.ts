import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-dashboard-location',
  templateUrl: './dashboard-location.component.html',
  styleUrls: ['./dashboard-location.component.scss'],
})
export class DashboardLocationComponent implements OnInit {
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
