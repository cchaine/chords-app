export class Settings {
  settings_groups : SettingEntry[][];

  target_section : string;
  target_name : string;

  constructor(target_section : string = "", target_name : string = "", settings_groups : SettingEntry[][] = []) {
    this.target_section = target_section;
    this.target_name = target_name;
    this.settings_groups = settings_groups;
  }

  clone() : Settings {
    let groups : SettingEntry[][] = [];
    for(let group of this.settings_groups) {
      let entries = [];
      for(let entry of group) {
        entries.push(Object.assign({}, entry));
      }
      groups.push(entries);
    }
    let new_object = new Settings(this.target_section, this.target_name, groups);
    return new_object;
  }

  public get(name : string) : SettingEntry {
    let found = false;
    let i = 0;
    let j = 0;
    while(!found && i < this.settings_groups.length) {
      let group = this.settings_groups[i];

      j = 0;
      while(!found && j < group.length) {
        found = group[j].name.toUpperCase() == name.toUpperCase();
        if(!found) {
          j++;
        }
      }

      if(!found) {
        i++;
      }
    }

    let entry;
    if(!found) {
      entry = undefined;
    }  else {
      entry = this.settings_groups[i][j];
    }
    return entry;
  }
}
export class SettingEntry {
  name : string;
  enabled : boolean;
  min_preset : Preset;

  constructor(name : string, min_preset: Preset) {
    this.name = name;
    this.enabled = true;
    this.min_preset = min_preset;
  }
}
export enum Preset {
  EASY = 1,
  MEDIUM = 2,
  HARD = 3
}
