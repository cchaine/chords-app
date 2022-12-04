import { Component } from '@angular/core';

@Component({
  selector: 'settings-entry',
  templateUrl: './settings-entry.component.html',
  styleUrls: ['./settings-entry.component.sass']
})
export class SettingsEntryComponent {
  selected: boolean = true;

  public onclick() {
    this.selected = !this.selected;
  }
}
