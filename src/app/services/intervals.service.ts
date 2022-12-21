import { Injectable } from '@angular/core';
import { Note } from '@models/note';
import { Interval } from '@models/interval';

@Injectable({
  providedIn: 'root'
})
export class IntervalsService {
  notes : Note[];
  intervals : Interval[];

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

    this.intervals = [
      new Interval(1, "Minor second"),
      new Interval(2, "Major second"),
      new Interval(3, "Minor third"),
      new Interval(4, "Major third"),
      new Interval(5, "Perfect fourth"),
      new Interval(6, "Augmented fourth"),
      new Interval(7, "Perfect fifth"),
      new Interval(8, "Minor sixth"),
      new Interval(9, "Major sixth"),
      new Interval(10, "Minor seventh"),
      new Interval(11, "Major seventh")
    ];
  }

  public get_note(index: number) : Note {
    return this.notes[index];
  }

  public generate_interval() : Interval {
    let interval_index = Math.floor(Math.random() * this.intervals.length);
    let interval = Object.assign({}, this.intervals[interval_index]);

    // We want more ups than downs
    interval.is_up = Math.floor(Math.random() * 3) >= 1;

    let root_index = Math.floor(Math.random() * this.notes.length);
    interval.root = this.notes[root_index];

    let answer_index;
    if(interval.is_up) {
      answer_index = (root_index + interval.size_in_half_step) % this.notes.length;
    } else {
      answer_index = ((this.notes.length - 1) + (root_index - interval.size_in_half_step)) % this.notes.length;
    }
    interval.answer = this.notes[answer_index];
    return interval;
  }
}
