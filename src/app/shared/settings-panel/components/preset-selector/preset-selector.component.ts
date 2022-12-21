import { Component } from '@angular/core';

@Component({
  selector: 'preset-selector',
  templateUrl: './preset-selector.component.html',
  styleUrls: ['./preset-selector.component.scss']
})
export class PresetSelectorComponent {
  selected : number = 0;

  select(id : number) {
    this.selected = id;
  }
}
