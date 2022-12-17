import { Component } from '@angular/core';
import { Note } from '@services/intervals.service';

@Component({
  selector: 'answer-input',
  templateUrl: './answer-input.component.html',
  styleUrls: ['./answer-input.component.sass']
})
export class AnswerInputComponent {
  selected: boolean = false;
  title : string = "";
  value : Note;
  valid : boolean = false;
  invalid : boolean = false;

  public select() {
    this.selected = true;
    this.set_unchecked();
  }

  public deselect() {
    this.selected = false;
  }

  public set_valid() {
    this.valid = true;
    this.invalid = false;
  }

  public set_invalid() {
    this.valid = false;
    this.invalid = true;
  }

  public set_unchecked() {
    this.valid = false;
    this.invalid = false;
  }

  public set_value(value: Note) {
    this.value = value;
    this.title = value.names[0];
  }

  public clear() {
    this.value = null;
    this.title = "";
    this.valid = false;
    this.invalid = false;
  }
}
