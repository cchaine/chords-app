import { Injectable } from '@angular/core';
import { Note } from '@models/note';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  notes : Note[];

  constructor() {
    this.notes = [
      new Note(["C"]),
      new Note(["C#", "Db"]),
      new Note(["D"]),
      new Note(["D#", "Eb"]),
      new Note(["E", "Fb"]),
      new Note(["F", "E#"]),
      new Note(["F#", "Gb"]),
      new Note(["G"]),
      new Note(["G#", "Ab"]),
      new Note(["A"]),
      new Note(["A#", "Bb"]),
      new Note(["B", "Cb"])
    ];
  }

  public get_note(index: number) : Note {
    return this.notes[index];
  }

  public get_notes(whole : boolean, altered : boolean) : Note[] {
    return this.notes.filter((el) => {
      let valid = false;
      let root = el.names[0];
      if(whole) {
        valid = valid || ((root.indexOf("#") == -1) && (root.indexOf("b") == -1));
      }
      if(altered) {
        valid = valid || ((root.indexOf("#") != -1) || (root.indexOf("b") != -1));
      }
      return valid;
    });
  }

  public filter(fn : (el: Note) => boolean) : Note[] {
    return this.notes.filter(fn);
  }

  public findIndex(fn: (el: Note) => boolean) : number {
    return this.notes.findIndex(fn);
  }

  public solve_interval_from_note(start : Note, interval_in_half_steps : number, is_up : boolean = true) {
    let start_index = this.notes.findIndex(el => el == start);
    let end_index;
    if(is_up) {
      end_index = (start_index + interval_in_half_steps) % this.notes.length;
    } else {
      end_index = ((this.notes.length - 1) + (start_index - interval_in_half_steps)) % this.notes.length;
    }
    return this.notes[end_index];
  }
}
