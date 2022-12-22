import { Injectable } from '@angular/core';
import { Note } from '@models/note';
import { Interval } from '@models/interval';
import { Settings } from '@models/settings';

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

  public generate_interval(settings : Settings) : Interval {
    // Filter intervals according to settings
    let filtered_intervals = this.intervals.filter((el) => {
      let name = el.name.split(" ").slice(-1)[0];
      return settings.get(name).enabled;
    });

    let interval_index = Math.floor(Math.random() * filtered_intervals.length);
    let interval = Object.assign({}, filtered_intervals[interval_index]);

    // Determines if the interval should be going up or down
    interval.is_up = Math.floor(Math.random() * 2) == 0;
    if(!settings.get("up").enabled) {
      interval.is_up = false;
    } else if(!settings.get("down").enabled) {
      interval.is_up = true;
    }

    // Filter root notes according to settings
    let filtered_roots = this.notes.filter((el) => {
      let valid = false;
      let root = el.names[0];
      if(settings.get("whole notes").enabled) {
        valid = valid || ((root.indexOf("#") == -1) && (root.indexOf("b") == -1));
      }
      if(settings.get("altered notes").enabled) {
        valid = valid || ((root.indexOf("#") != -1) || (root.indexOf("b") != -1));
      }
      return valid;
    });
    let root_index_filtered = Math.floor(Math.random() * filtered_roots.length);
    interval.root = filtered_roots[root_index_filtered];

    // Compute the index of the root in the unfiltered list
    let root_index = this.notes.findIndex(el => el == filtered_roots[root_index_filtered]);

    // Compute the answer
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
