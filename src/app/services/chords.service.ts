import { Injectable } from '@angular/core';

import { Chord, Note, Settings } from '@models';
import { NotesService } from '@services';

@Injectable({
  providedIn: 'root'
})
export class ChordsService {
  chords : Chord[];

  constructor(private notes_service : NotesService) {
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

  public generate_chord(settings : Settings) : Chord {
    // Filter chords according to settings
    let filtered_chords = this.chords.filter((el) => {
      let name = el.names[0];
      return settings.get(name).enabled;
    });
    let chord_index = Math.floor(Math.random() * filtered_chords.length);
    let chord = filtered_chords[chord_index].clone();

    // Filter root notes according to settings
    let filtered_roots = this.notes_service.get_notes(settings.get("Whole roots").enabled, settings.get("Altered roots").enabled);
    let root_index_filtered = Math.floor(Math.random() * filtered_roots.length);
    let root_note = filtered_roots[root_index_filtered];

    // Compute the answer
    chord.answers.push(root_note);
    let answer_index;
    for(let interval of chord.intervals_in_half_step) {
      chord.answers.push(this.notes_service.solve_interval_from_note(root_note, interval));
    }

    return chord;
  }
}
