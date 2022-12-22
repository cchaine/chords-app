import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { SettingEntry, Settings } from '@models/settings';
import { PresetSelectorComponent } from './components/preset-selector/preset-selector.component';
import { ThemeService } from '@services/theme.service';

@Component({
  selector: 'settings-panel',
  templateUrl: './settings-panel.component.html',
  styleUrls: ['./settings-panel.component.scss']
})
export class SettingsPanelComponent {
  backdrop_fading : boolean = true;
  backdrop_shown : boolean = false;

  shown : boolean = false;

  valid : boolean = true;

  settings : Settings;

  @ViewChild(PresetSelectorComponent) preset_selector : PresetSelectorComponent;

  @Output() start : EventEmitter<Settings> = new EventEmitter<Settings>();

  constructor(private theme_service : ThemeService) {
    // Initialized 
    this.settings = new Settings();
  }

  public clear() {
    this.settings = new Settings();
    this.valid = true;
    this.preset_selector.deselect();
  }

  check_valid() {
    // checks if still valid
    let valid = true;
    let i = 0;
    while(valid && i < this.settings.settings_groups.length) {
      let group = this.settings.settings_groups[i];

      let j = 0;
      let atleastone = false;
      while(!atleastone && j < group.length) {
        atleastone = group[j].enabled;
        if(!atleastone) {
          j++;
        }
      }

      valid = atleastone;
      if(valid) {
        i++;
      }
    }

    this.valid = valid;
  }

  //-------- Event Handlers -----

  entry_clicked(entry : SettingEntry) {
    entry.enabled = !entry.enabled;
    this.preset_selector.deselect();
    this.check_valid();
  }

  preset_changed(preset : number) {
    for(let group of this.settings.settings_groups) {
      for(let entry of group) {
        entry.enabled = (entry.min_preset <= preset);
      }
    }
  }

  start_clicked() {
    if(this.valid) {
      this.start.emit(this.settings);
    }
  }

  //-------- GUI methods ---------
  
  public show(settings : Settings) {
    this.settings = settings.clone();
    this.check_valid();

    // Get the theme
    this.theme_service.get(this.settings.target_section, this.settings.target_name).apply();

    this.backdrop_shown = true;
    setTimeout(() => {
      this.backdrop_fading = false;
    }, 5);
    this.shown = true;
  }

  public hide() {
    this.clear();

    this.shown = false;
    this.backdrop_fading = true;
    setTimeout(() => {
      this.backdrop_shown = false;
    }, 300);
  }
}
