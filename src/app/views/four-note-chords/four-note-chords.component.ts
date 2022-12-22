import { Component, ViewChild, ElementRef} from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ChordsService } from '@services/chords.service';
import { Chord } from '@models/chord';
import { Settings } from '@models/settings';
import { SettingsPanelComponent, InputPanelComponent, KeyboardComponent } from '@shared';
import { SettingsService } from '@services/settings.service';
import { ThemeService } from '@services/theme.service';

@Component({
  selector: 'four-note-chords',
  templateUrl: './four-note-chords.component.html',
  styleUrls: ['./four-note-chords.component.scss']
})
export class FourNoteChordsComponent {
  current_chord: Chord;
  question : string = "";

  @ViewChild(InputPanelComponent) input_panel : InputPanelComponent;
  @ViewChild(KeyboardComponent) keyboard : KeyboardComponent;

  settings_shown : boolean = false;
  keyboard_shown: boolean = false;

  @ViewChild(SettingsPanelComponent) settings_panel : SettingsPanelComponent;

  settings : Settings = new Settings();

  public constructor(private chords_service: ChordsService, private router : Router, private location: Location, private settings_service : SettingsService, private theme_service : ThemeService) {
  }

  ngOnInit() {
    // Change the theme color
    this.theme_service.get("Chords", "Four note chords").apply();

    // Get the settings
    let state : any = this.location.getState();
    if(state.hasOwnProperty('settings')) {
      // This is needed as passing data through the state variables removes class methods
      this.settings = Object.assign(this.settings, state.settings);
    } else {
      // Generate a new settings property
      this.settings = this.settings_service.get_settings("Chords", "Four note chords"); 
    }

    this.new_question();
  }

  /**
   * Generates a new question
   */
  public new_question() {
    // Ask the chords_service for a chord
    this.current_chord = this.chords_service.generate_chord(this.settings);

    let root = this.current_chord.answers[0];
    // Generate the question
    let root_name_index = Math.floor(Math.random() * root.names.length);
    this.question = root.names[root_name_index]
    let chord_name_index = Math.floor(Math.random() * this.current_chord.names.length);
    this.question += this.current_chord.names[chord_name_index];
  }

  /**
   * Checks the inputed answer againts the correct answer
   */
  public check_answer() {
    let notes = this.input_panel.get_values();
    
    // Compare results
    let results : boolean[] = [];
    notes.forEach((el, i) => {
        results.push(el == this.current_chord.answers[i]);
    });

    // Show results
    this.input_panel.set_results(results);
    if(results.filter(result => result == false).length == 0) {
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
    this.input_panel.set_value(this.chords_service.get_note(index));
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

  /**
   * Shows the settings panel
   */
  public show_settings() {
    this.settings_panel.show(this.settings); 
  }
}
