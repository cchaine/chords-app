import { Component, ViewChild, ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import { IntervalsService } from '@services/intervals.service';
import { Interval } from '@models/interval';
import { Settings } from '@models/settings';
import { InputPanelComponent, KeyboardComponent } from '@shared';

@Component({
  selector: 'intervals-from',
  templateUrl: './intervals-from.component.html',
  styleUrls: ['./intervals-from.component.scss']
})
export class IntervalsFromComponent {
  router : Router;
  intervals_service : IntervalsService;

  current_interval : Interval;
  question : string = "";
  question_root : string = "";

  @ViewChild(InputPanelComponent) input_panel : InputPanelComponent;
  @ViewChild(KeyboardComponent) keyboard : KeyboardComponent;

  keyboard_shown: boolean = false;

  public constructor(intervals_service: IntervalsService, router : Router) {
    this.intervals_service = intervals_service;
    this.router = router;

    this.new_question();
  }

  ngOnInit() {
    // Change the theme color
    document.documentElement.style.setProperty("--theme-primary", "#6D82F2");
    document.documentElement.style.setProperty("--theme-lighter", "#B9C3FE");
  }

  /**
   * Generates a new question
   */
  public new_question() {
    // Ask the intervals_service for an interval
    this.current_interval = this.intervals_service.generate_interval();
    let root = this.current_interval.root;

    // Generate the question
    this.question = this.current_interval.name + " ";
    this.question += this.current_interval.is_up ? "up" : "down";
    this.question += " from";
    
    let root_name_index = Math.floor(Math.random() * root.names.length);
    this.question_root = root.names[root_name_index];
  }

  /**
   * Checks the inputed answer againts the correct answer
   */
  public check_answer() {
    let notes = this.input_panel.get_values();
    
    // Compare results
    let result = notes[0] == this.current_interval.answer;
    this.input_panel.set_results([result]);
    if(result) {
      this.input_panel.show_success();
      setTimeout(() => {
        this.input_panel.clear_all();
        this.new_question();
        this.input_panel.hide_success();
      }, 1500);
    }
  }

  /**
   * Skips the question
   */
  public skip() {
    this.input_panel.show_skip();
    setTimeout(() => {
      this.input_panel.clear_all();
      this.new_question();
      this.input_panel.hide_skip();
      this.hide_keyboard();
    }, 1000);
  }

  /**
   * Goes back to the menu
   */
  public home() {
    this.router.navigateByUrl("/");
  }

  //------- Event handlers ---------
  
  public input_clicked() {
    this.show_keyboard();
  }
  
  public note_clicked(index: number) {
    this.input_panel.set_value(this.intervals_service.get_note(index));
  }


  public check_clicked() {
    this.hide_keyboard();

    setTimeout(() => {
      this.check_answer();
    }, 500);
  }

  //------- Graphics methods -------

  /**
   * Shows the keyboard
   */
  public show_keyboard() {
    this.keyboard.show();
    this.keyboard_shown = true; 
  }

  /**
   * Hides the keyboard
   */
  public hide_keyboard() {
    this.keyboard.hide();
    this.keyboard_shown = false; 
    this.input_panel.deselect_all();
  }
}
