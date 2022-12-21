import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { Settings } from '@models/settings';

@Component({
  selector: 'settings-panel',
  templateUrl: './settings-panel.component.html',
  styleUrls: ['./settings-panel.component.scss']
})
export class SettingsPanelComponent {
  backdrop_fading : boolean = true;
  backdrop_shown : boolean = false;

  shown : boolean = false;

  constructor() {
  }

  public show() {
    this.backdrop_shown = true;
    setTimeout(() => {
      this.backdrop_fading = false;
    }, 5);
    this.shown = true;
  }

  public hide() {
    this.shown = false;
    this.backdrop_fading = true;
    setTimeout(() => {
      this.backdrop_shown = false;
    }, 300);
  }
}
