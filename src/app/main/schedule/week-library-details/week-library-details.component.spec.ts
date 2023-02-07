import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekLibraryDetailsComponent } from './week-library-details.component';

describe('WeekLibraryDetailsComponent', () => {
  let component: WeekLibraryDetailsComponent;
  let fixture: ComponentFixture<WeekLibraryDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekLibraryDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeekLibraryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
