import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'settings-entry',
  templateUrl: './settings-entry.component.html',
  styleUrls: ['./settings-entry.component.scss']
})
export class SettingsEntryComponent {
  selected: boolean = true;

  @Output()
  changed: EventEmitter<boolean> = new EventEmitter<boolean>();

  public onclick() {
    this.selected = !this.selected;
    this.changed.emit();
  }
}
