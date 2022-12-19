import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { SettingsEntryComponent } from './components/settings-entry/settings-entry.component';
import { Settings } from '@models/settings';

@Component({
  selector: 'settings-panel',
  templateUrl: './settings-panel.component.html',
  styleUrls: ['./settings-panel.component.scss']
})
export class SettingsPanelComponent {
  hidden : boolean = true;
  panel_clicked : boolean = false;

  @ViewChild('entry_down') entry_down:SettingsEntryComponent;

  @Output()
  clickOutside: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  settingsChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  public constructor() {}

  public show() {
    this.hidden = false;
  }

  public hide() {
    this.hidden = true;
  }

  public onpanelclick() {
    this.panel_clicked = true;
  }

  public oncontainerclick() {
    if(this.panel_clicked) {
      // Was inside
      this.panel_clicked = false;
    } else {
      // Was outside
      this.clickOutside.emit()
    }
  }

  public get_settings() {
    return new Settings(this.entry_down.selected);
  }

  public settings_changed() {
    this.settingsChanged.emit();
  }
}

