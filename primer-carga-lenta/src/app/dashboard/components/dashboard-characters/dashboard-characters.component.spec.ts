import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCharactersComponent } from './dashboard-characters.component';

describe('DashboardCharactersComponent', () => {
  let component: DashboardCharactersComponent;
  let fixture: ComponentFixture<DashboardCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardCharactersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
