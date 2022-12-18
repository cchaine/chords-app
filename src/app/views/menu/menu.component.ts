import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent {
  sections : MenuSection[];

  router : Router;

  constructor(router : Router) {
    this.router = router;

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
            "Three note chords",
            "Guess the notes belonging to a given three note chord",
            "assets/menu-icons/three-note-chords.svg",
            "/three-note-chords",
            false),
          new MenuItem(
            "Four note chords",
            "Guess the notes belonging to a given four note chord",
            "assets/menu-icons/four-note-chords.svg",
            "/four-note-chords",
            false)
        ])
    ];
  }

  item_clicked(item : MenuItem) {
    if(item.enabled) {
      this.router.navigateByUrl(item.link);
    }
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
