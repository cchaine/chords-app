import { Injectable } from '@angular/core';
import { Chord } from '@models/chord';
import { Note } from '@models/note';

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
        ["maj7", "M7", "Δ7"], 
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

  public generate_chord() : Chord {
    let chord_index = Math.floor(Math.random() * this.chords.length);
    let chord = Object.assign({}, this.chords[chord_index]);

    let root_index = Math.floor(Math.random() * this.notes.length);
    chord.answers.push(this.notes[root_index]);

    let answer_index;
    for(let interval of chord.intervals_in_half_step) {
      answer_index = (root_index + interval) % this.notes.length;
      chord.answers.push(this.notes[answer_index]);
    }
    return chord;
  }
}
