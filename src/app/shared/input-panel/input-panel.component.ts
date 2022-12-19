import { Component, Output, Input, EventEmitter, ViewChild, ViewChildren, ElementRef, QueryList} from '@angular/core';
import { AnswerInputComponent } from './components/answer-input/answer-input.component';
import { Note } from '@models/note';

@Component({
  selector: 'input-panel',
  templateUrl: './input-panel.component.html',
  styleUrls: ['./input-panel.component.scss']
})
export class InputPanelComponent {
  @Input() nb_inputs : number;
  @ViewChildren(AnswerInputComponent) inputs : QueryList<AnswerInputComponent>;

  keyboard_shown : boolean = false;
  check_shown : boolean = false;
  success_shown : boolean = false;
  skip_shown : boolean = false;

  @Output() inputClicked : EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() checkClicked : EventEmitter<boolean> = new EventEmitter<boolean>();

  @ViewChild('answer_overflow_container') answer_overflow_container:ElementRef;

  constructor() { }

  public clear_all() {
    this.inputs.forEach((el) => {
      el.clear();
    });
  }

  /**
   * Deselects every inputs
   */
  public deselect_all() {
    this.inputs.forEach((el, i) => {
      el.deselect();
    });
  }

  /**
   * Called to set the value of the selected input
   */
  public set_value(value : Note) {
    // Set the value
    let current_input = this.inputs.find(element => element.selected);
    let current_index = this.inputs.toArray().indexOf(current_input);
    current_input.set_value(value);

    // Checks if every field was entered
    let undefined_inputs = this.inputs.filter(element => element.value == undefined);
    if(undefined_inputs.length == 0) {
      this.show_check();
    } else {
      // Otherwise select the next one
      current_input.deselect();
      // Try to find the next one
      let next = this.inputs.find((element, index) => index > current_index && element.value == undefined);
      if(next != undefined) {
        next.select();
      } else {
        undefined_inputs[0].select();
      }
    }
  }

  public set_results(results : boolean[]) {
    this.inputs.forEach((el, i) => {
      if(i < results.length) {
        el.set_valid(results[i]);
      }
    });
  }

  /**
   * Returns every inputed value
   */
  public get_values() : Note[] {
    let values : Note[] = [];
    this.inputs.forEach((el) => {
      values.push(el.value);
    });
    return values;
  }

  //------ Event Handlers ------
  
  /**
   * Called when an input was clicked
   */
  input_clicked(index : number) {
    this.inputs.forEach((el, i) => {
      if(i == index) {
        el.select();
      } else {
        el.deselect();
      }
    });
    this.inputClicked.emit();
  }

  /**
   * Called when the check button was clicked
   */
  check_clicked() {
    this.hide_check();
    this.checkClicked.emit();
  }

  //------- GUI methods --------
  
  /**
   * Shows the check button
   */
  public show_check() {
    // If the check is not hidden
    if(this.check_shown) {
      // If the scroll position is left
      if(this.answer_overflow_container.nativeElement.scrollLeft == 0) {
        // Scroll right 
        setTimeout(() => {
          // The check button was hidden, we need to scroll there
          this.answer_overflow_container.nativeElement.scrollTo(90, 0);
        }, 300);
      }
    } else {
      this.check_shown = true;
      setTimeout(() => {
        // The check button was hidden, we need to scroll there
        this.answer_overflow_container.nativeElement.scrollTo(90, 0);
      }, 300);
    }
  }

  /**
   * Hides the check button
   */
  public hide_check() {
    if(this.check_shown) {
        this.answer_overflow_container.nativeElement.scrollTo(0, 0);
      setTimeout(() => {
        this.check_shown = false;
      }, 500);
    }
  }

  /**
   * Shows the success banner
   */
  public show_success() {
    this.success_shown = true;
  }

  /**
   * Hides the success banner
   */
  public hide_success() {
    this.success_shown = false;
  }

  /**
   * Shows the skip banner
   */
  public show_skip() {
    this.skip_shown = true;
  }

  /**
   * Hides the skip banner
   */
  public hide_skip() {
    this.skip_shown = false;
  }

}
