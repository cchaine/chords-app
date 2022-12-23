import { Component, EventEmitter, Output } from '@angular/core';

import { NotesService } from '@services';
import { Note } from '@models';

@Component({
  selector: 'keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent {
  @Output()
  noteclicked: EventEmitter<Note> = new EventEmitter<Note>();

  shown : boolean = false;

  constructor(
    private notes_service : NotesService
  ) {}

  public register_click(index: number) {
    this.noteclicked.emit(this.notes_service.get_note(index));
  }

  public show() {
    this.shown = true;
  }

  public hide() {
    this.shown = false;
  }
}
