import { Component, OnInit } from '@angular/core';
import { mockLocations } from '../mock/locations.mock';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
})
export class LocationsComponent implements OnInit {
  public response = mockLocations;
  constructor() {}

  ngOnInit(): void {}
}
