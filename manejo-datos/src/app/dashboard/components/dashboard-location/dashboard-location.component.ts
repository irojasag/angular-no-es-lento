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
  public mostrar: boolean = true;
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

  public getCount(): number {
    console.log('CALCULA LA LOCATIONS');
    if (this.response) {
      let count = 0;
      this.response.results.forEach(() => (count = count + 1));
      return count;
    } else {
      return 0;
    }
  }

  ngOnInit(): void {
    this.locationService.getAllLocations();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
