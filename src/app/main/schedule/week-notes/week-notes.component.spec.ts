import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekNotesComponent } from './week-notes.component';

describe('WeekNotesComponent', () => {
  let component: WeekNotesComponent;
  let fixture: ComponentFixture<WeekNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekNotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeekNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
