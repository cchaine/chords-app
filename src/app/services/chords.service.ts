import { Injectable } from '@angular/core';
import { Chord } from '@models/chord';
import { Note } from '@models/note';
import { Settings } from '@models/settings';

@Injectable({
  providedIn: 'root'
})
export class ChordsService {
  notes : Note[];
  chords : Chord[];

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

    this.chords = [
      new Chord(
        ["maj7", "M7"], 
        [4, 7, 11]),
      new Chord(
        ["m7", "-7"],
        [3, 7, 10]),
      new Chord(
        ["m7b5", "ø7"],
        [3, 6, 10])
    ];
  }

  public get_note(index: number) : Note {
    return this.notes[index];
  }

  public generate_chord(settings : Settings) : Chord {
    // Filter chords according to settings
    let filtered_chords = this.chords.filter((el) => {
      let name = el.names[0];
      return settings.get(name).enabled;
    });
    let chord_index = Math.floor(Math.random() * filtered_chords.length);
    let chord = filtered_chords[chord_index].clone();

    // Filter root notes according to settings
    let filtered_roots = this.notes.filter((el) => {
      let valid = false;
      let root = el.names[0];
      if(settings.get("whole roots").enabled) {
        valid = valid || ((root.indexOf("#") == -1) && (root.indexOf("b") == -1));
      }
      if(settings.get("altered roots").enabled) {
        valid = valid || ((root.indexOf("#") != -1) || (root.indexOf("b") != -1));
      }
      return valid;
    });
    let root_index_filtered = Math.floor(Math.random() * filtered_roots.length);
    chord.answers.push(filtered_roots[root_index_filtered]);

    // Compute the index of the root in the unfiltered list
    let root_index = this.notes.findIndex(el => el == filtered_roots[root_index_filtered]);

    // Compute the answer
    let answer_index;
    for(let interval of chord.intervals_in_half_step) {
      answer_index = (root_index + interval) % this.notes.length;
      chord.answers.push(this.notes[answer_index]);
    }

    return chord;
  }
}
