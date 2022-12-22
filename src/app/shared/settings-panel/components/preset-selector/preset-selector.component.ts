import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'preset-selector',
  templateUrl: './preset-selector.component.html',
  styleUrls: ['./preset-selector.component.scss']
})
export class PresetSelectorComponent {
  selected : number = 0;

  @Output() preset_changed : EventEmitter<number> = new EventEmitter<number>();

  select(id : number) {
    this.selected = id;

    this.preset_changed.emit(this.selected);
  }

  public deselect() {
    this.selected = 0;
  }
}
