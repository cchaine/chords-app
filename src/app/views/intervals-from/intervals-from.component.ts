import { Component, ViewChild, ElementRef} from '@angular/core';
import { IntervalsService, Interval } from '@services/intervals.service';
import { Settings } from '@models/settings';
import { SettingsPanelComponent, AnswerInputComponent } from '@shared/shared.module';

@Component({
  selector: 'intervals-from',
  templateUrl: './intervals-from.component.html',
  styleUrls: ['./intervals-from.component.sass']
})
export class IntervalsFromComponent {
  current_interval : Interval;
  question : string = "";
  question_root : string = "";

  @ViewChild(SettingsPanelComponent) settings_panel : SettingsPanelComponent;
  @ViewChild(AnswerInputComponent) answer_input : AnswerInputComponent;
  @ViewChild('answer_overflow_container') answer_overflow_container:ElementRef;

  settings_hidden : boolean = true;
  keyboard_hidden : boolean = true;
  check_hidden : boolean = true;
  success_hidden : boolean = true;
  skip_hidden : boolean = true;

  intervals_service : IntervalsService;

  public constructor(intervals_service: IntervalsService) {
    this.intervals_service = intervals_service;

    this.new_question(new Settings(true));
  }

  public new_question(settings : Settings) {
    // Ask the intervals_service for an interval
    this.current_interval = this.intervals_service.generate_interval(settings);
    let root = this.current_interval.root;

    // Generate the question
    this.question = this.current_interval.name + " ";
    this.question += this.current_interval.is_up ? "up" : "down";
    this.question += " from";
    
    let root_name_index = Math.floor(Math.random() * root.names.length);
    this.question_root = root.names[root_name_index];
  }

  public show_keyboard() {
    this.keyboard_hidden = false; 
    this.answer_input.select();
  }

  public hide_keyboard() {
    this.keyboard_hidden = true; 
    this.answer_input.deselect();
  }

  public show_settings() {
    this.settings_hidden = false;
    setTimeout(() => {
      this.settings_panel.show();
    }, 5);
  }

  public hide_settings() {
    this.settings_panel.hide();
    setTimeout(() => {
      this.settings_hidden = true;
    }, 300);
  }

  public show_check() {
    // If the check is not hidden
    if(this.check_hidden == false) {
      // If the scroll position is left
      if(this.answer_overflow_container.nativeElement.scrollLeft == 0) {
        // Scroll right 
        setTimeout(() => {
          // The check button was hidden, we need to scroll there
          this.answer_overflow_container.nativeElement.scrollTo(90, 0);
        }, 300);
      }
    } else {
      this.check_hidden = false;
      setTimeout(() => {
        // The check button was hidden, we need to scroll there
        this.answer_overflow_container.nativeElement.scrollTo(90, 0);
      }, 300);
    }
    }

  public hide_check() {
    if(this.check_hidden == false) {
        this.answer_overflow_container.nativeElement.scrollTo(0, 0);
      setTimeout(() => {
        this.check_hidden = true;
      }, 500);
    }
  }

  public show_success() {
    this.success_hidden = false;
  }

  public hide_success() {
    this.success_hidden = true;
  }

  public show_skip() {
    this.skip_hidden = false;
  }

  public hide_skip() {
    this.skip_hidden = true;
  }

  public note_clicked(index: number) {
    this.answer_input.set_value(this.intervals_service.get_note(index));
    this.show_check();
  }

  public check_answer() {
    let note = this.answer_input.value;
    if(note == this.current_interval.answer) {
      this.answer_input.set_valid();
      this.show_success();
      setTimeout(() => {
        this.answer_input.clear();
        this.new_question(this.settings_panel.get_settings());
        this.hide_success();
      }, 1500);
    } else {
      this.answer_input.set_invalid();
    }
  }

  public check_clicked() {
    this.hide_keyboard();
    this.hide_check();

    setTimeout(() => {
      this.check_answer();
    }, 500);
  }

  public skip() {
    this.show_skip();
    setTimeout(() => {
      this.answer_input.clear();
      this.new_question(this.settings_panel.get_settings());
      this.hide_skip();
    }, 1000);
  }

  public settings_changed() {
    this.skip();
  }
}