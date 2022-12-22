import { Injectable } from '@angular/core';
import { Settings, SettingEntry, Preset } from '@models/settings';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  settings_by_views : Settings[];

  constructor() {
    this.settings_by_views = [
      new Settings(
        "Intervals",
        "From", [
          [
            new SettingEntry("Up",    Preset.EASY),
            new SettingEntry("Down",  Preset.HARD),
          ], [
            new SettingEntry("Second",   Preset.EASY),
            new SettingEntry("Third",    Preset.EASY),
            new SettingEntry("Fourth",   Preset.EASY),
            new SettingEntry("Fifth",    Preset.EASY),
            new SettingEntry("Sixth",    Preset.EASY),
            new SettingEntry("Seventh",  Preset.EASY)
          ], [
            new SettingEntry("Whole notes",   Preset.EASY),
            new SettingEntry("Altered notes", Preset.MEDIUM)
          ]
      ]),
      new Settings(
        "Chords",
        "Four note chords", [
          [
            new SettingEntry("maj7",  Preset.EASY),
            new SettingEntry("m7",    Preset.EASY),
            new SettingEntry("m7b5",  Preset.EASY),
          ], [
            new SettingEntry("Whole roots",   Preset.EASY),
            new SettingEntry("Altered roots", Preset.MEDIUM)
          ]
      ]),
    ];
  }

  public get_settings(section : string, name : string) : Settings {
    let found : boolean = false;
    let i : number = 0;
    let setting;
    while(!found && i < this.settings_by_views.length) {
      setting = this.settings_by_views[i];
      found = (section == setting.target_section) && (name == setting.target_name);
      if(!found) {
        i++;
      }
    }

    if(!found) {
      console.log("No setting was found for section " + section + " and name " + name);
      setting = undefined;
    } else {
      setting = setting.clone();
    }

    return setting;
  }
}
