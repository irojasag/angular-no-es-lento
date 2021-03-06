import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEpisodesComponent } from './dashboard-episodes.component';

describe('DashboardEpisodesComponent', () => {
  let component: DashboardEpisodesComponent;
  let fixture: ComponentFixture<DashboardEpisodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardEpisodesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardEpisodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
