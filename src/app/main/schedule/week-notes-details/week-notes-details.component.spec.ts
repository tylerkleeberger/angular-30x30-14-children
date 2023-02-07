import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekNotesDetailsComponent } from './week-notes-details.component';

describe('WeekNotesDetailsComponent', () => {
  let component: WeekNotesDetailsComponent;
  let fixture: ComponentFixture<WeekNotesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekNotesDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeekNotesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
