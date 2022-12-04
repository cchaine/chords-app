import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsEntryComponent } from './settings-entry.component';

describe('SettingsEntryComponent', () => {
  let component: SettingsEntryComponent;
  let fixture: ComponentFixture<SettingsEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
