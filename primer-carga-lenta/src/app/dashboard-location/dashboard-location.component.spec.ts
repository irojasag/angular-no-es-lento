import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardLocationComponent } from './dashboard-location.component';

describe('DashboardLocationComponent', () => {
  let component: DashboardLocationComponent;
  let fixture: ComponentFixture<DashboardLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
