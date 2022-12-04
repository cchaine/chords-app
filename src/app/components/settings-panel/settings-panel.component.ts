import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'settings-panel',
  templateUrl: './settings-panel.component.html',
  styleUrls: ['./settings-panel.component.sass']
})
export class SettingsPanelComponent {
  hidden : boolean = true;
  panel_clicked : boolean = false;

  @Output()
  clickOutside: EventEmitter<boolean> = new EventEmitter<boolean>();

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
}
