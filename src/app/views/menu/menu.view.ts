import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsPanelComponent } from '@shared';
import { SettingsService } from '@services/settings.service';
import { Settings } from '@models/settings';

@Component({
  selector: 'menu-view',
  templateUrl: './menu.view.html',
  styleUrls: ['./menu.view.scss']
})
export class MenuView {
  sections : MenuSection[];

  router : Router;
  settings_service : SettingsService;

  @ViewChild(SettingsPanelComponent) settings_panel : SettingsPanelComponent;

  link : string;

  constructor(router : Router, settings_service : SettingsService) {
    this.router = router;
    this.settings_service = settings_service;

    this.sections = [
      new MenuSection(
        "Intervals", [
          new MenuItem(
            "From",
            "Guess the note which is a given interval up or down from a given note",
            "assets/menu-icons/intervals-from.svg",
            "/intervals-from"),
          new MenuItem(
            "Between",
            "Guess the interval between two given notes",
            "assets/menu-icons/intervals-between.svg",
            "/intervals-between",
            false)
        ]),
      new MenuSection(
        "Chords", [
          new MenuItem(
            "Four note chords",
            "Guess the notes belonging to a given four note chord",
            "assets/menu-icons/four-note-chords.svg",
            "/four-note-chords")
        ]),
      new MenuSection(
        "Scales", [
          new MenuItem(
            "Degrees",
            "Guess the note corresponding to a given degree of a given scale",
            "assets/menu-icons/scales-degrees.svg",
            "/scales-degrees")
        ]),
    ];
  }

  item_clicked(section : string, item : MenuItem) {
    if(item.enabled) {
      // Find the settings for this item
      let setting = this.settings_service.get_settings(section, item.title);
      this.settings_panel.show(setting);
      this.link = item.link;
    }
  }

  start(settings : Settings) {
    this.router.navigateByUrl(this.link, { state: {settings : settings} });
  }
}

class MenuSection {
  title : string;
  items : MenuItem[];

  constructor(title : string, items : MenuItem[]) {
    this.title = title;
    this.items = items;
  }
}

class MenuItem {
  title : string = "";
  description: string = "";
  icon_path : string = "";
  link : string = "";
  enabled : boolean;

  constructor(title : string, description : string, icon_path : string, link : string, enabled : boolean = true) {
    this.title = title;
    this.description = description;
    this.icon_path = icon_path;
    this.link = link;
    this.enabled = enabled;
  }
}
