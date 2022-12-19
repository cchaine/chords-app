import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent {
  @Output()
  noteclicked: EventEmitter<number> = new EventEmitter<number>();

  shown : boolean = false;

  public register_click(index: number) {
    this.noteclicked.emit(index)
  }

  public show() {
    this.shown = true;
  }

  public hide() {
    this.shown = false;
  }
}
