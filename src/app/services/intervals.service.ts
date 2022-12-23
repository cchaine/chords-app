import { Injectable } from '@angular/core';
import { Note, Interval, Settings } from '@models';
import { NotesService } from './notes.service';

@Injectable({
  providedIn: 'root'
})
export class IntervalsService {
  intervals : Interval[];

  constructor(private notes_service : NotesService) {
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
    let filtered_roots = this.notes_service.get_notes(settings.get("whole notes").enabled, settings.get("altered notes").enabled);
    let root_index_filtered = Math.floor(Math.random() * filtered_roots.length);
    interval.root = filtered_roots[root_index_filtered];

    interval.answer = this.notes_service.solve_interval_from_note(interval.root, interval.size_in_half_step, interval.is_up);

    return interval;
  }
}
