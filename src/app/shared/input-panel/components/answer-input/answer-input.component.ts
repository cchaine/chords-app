import { Component, Input } from '@angular/core';
import { Note } from '@models/note';

@Component({
  selector: 'answer-input',
  templateUrl: './answer-input.component.html',
  styleUrls: ['./answer-input.component.scss']
})
export class AnswerInputComponent {
  selected: boolean = false;
  title : string = "";
  value : Note;
  valid : boolean = false;
  invalid : boolean = false;

  ngOnInit() {
  }

  /**
   * Selects the input
   */
  public select() {
    this.selected = true;
    this.set_unchecked();
  }

  /**
   * Deselects the input
   */
  public deselect() {
    this.selected = false;
  }

  /**
   * Sets the input as valid or invalid according to the valid parameter
   */
  public set_valid(valid : boolean) {
    this.valid = valid;
    this.invalid = !valid;
  }

  /**
   * Set the inputs as unvalidated
   */
  public set_unchecked() {
    this.valid = false;
    this.invalid = false;
  }

  /**
   * Sets the input value
   */
  public set_value(value: Note) {
    this.value = value;
    this.title = value.names[0];
  }

  /**
   * Clears the input
   */
  public clear() {
    this.value = null;
    this.title = "";
    this.valid = false;
    this.invalid = false;
  }
}
