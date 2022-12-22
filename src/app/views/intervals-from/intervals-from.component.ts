import { Component, ViewChild, ElementRef} from '@angular/core';
import { Location } from '@angular/common'; 
import { Router } from '@angular/router';
import { IntervalsService } from '@services/intervals.service';
import { Interval } from '@models/interval';
import { Settings } from '@models/settings';
import { SettingsPanelComponent, InputPanelComponent, KeyboardComponent } from '@shared';
import { SettingsService } from '@services/settings.service';
import { ThemeService } from '@services/theme.service';

@Component({
  selector: 'intervals-from',
  templateUrl: './intervals-from.component.html',
  styleUrls: ['./intervals-from.component.scss']
})
export class IntervalsFromComponent {
  current_interval : Interval;
  question : string = "";
  question_root : string = "";

  @ViewChild(InputPanelComponent) input_panel : InputPanelComponent;
  @ViewChild(KeyboardComponent) keyboard : KeyboardComponent;

  @ViewChild(SettingsPanelComponent) settings_panel : SettingsPanelComponent;

  keyboard_shown: boolean = false;

  settings : Settings = new Settings();

  public constructor(private intervals_service: IntervalsService, private router : Router, private location: Location, private settings_service : SettingsService, private theme_service : ThemeService) {
  }

  ngOnInit() {
    // Change the theme color
    this.theme_service.get("Intervals", "From").apply();

    // Get the settings
    let state : any = this.location.getState();
    if(state.hasOwnProperty('settings')) {
      // This is needed as passing data through the state variables removes class methods
      this.settings = Object.assign(this.settings, state.settings);
    } else {
      // Generate a new settings property
      this.settings = this.settings_service.get_settings("Intervals", "From"); 
    }

    this.new_question();
  }

  /**
   * Generates a new question
   */
  public new_question() {
    // Ask the intervals_service for an interval
    this.current_interval = this.intervals_service.generate_interval(this.settings);
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

  public settings_changed(settings : Settings) {
    this.settings = settings;
    this.settings_panel.hide();
    setTimeout(() => {
      this.skip();
    }, 200);
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

  public show_settings() {
    this.settings_panel.show(this.settings); 
  }
}
