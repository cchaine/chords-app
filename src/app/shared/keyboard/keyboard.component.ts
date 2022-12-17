import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.sass']
})
export class KeyboardComponent {
  @Output()
  noteclicked: EventEmitter<number> = new EventEmitter<number>();

  public register_click(index: number) {
    this.noteclicked.emit(index)
  }
}
