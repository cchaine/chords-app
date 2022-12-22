import { Injectable } from '@angular/core';
import { Theme } from '@models/theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  themes : Theme[];

  constructor() {
    this.themes = [
      new Theme(
        "Intervals",
        "From",
        "#6D82F2",
        "#B9C3FE"),
      new Theme(
        "Chords",
        "Four note chords",
        "#D58466",
        "#F2AF88")
    ];
  }

  get(section : string, name : string) {
    let found : boolean = false;
    let i : number = 0;
    let theme;
    while(!found && i < this.themes.length) {
      theme = this.themes[i];
      found = (section == theme.target_section) && (name == theme.target_name);
      if(!found) {
        i++;
      }
    }

    if(!found) {
      console.log("No theme was found for section " + section + " and name " + name);
      theme = undefined;
    }

    return theme;
  }
}
