import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervalsFromComponent } from './intervals-from.component';

describe('IntervalsFromComponent', () => {
  let component: IntervalsFromComponent;
  let fixture: ComponentFixture<IntervalsFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntervalsFromComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntervalsFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
