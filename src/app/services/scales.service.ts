import { Injectable } from '@angular/core';

import { Scale, Settings } from '@models';
import { NotesService } from '@services';

@Injectable({
  providedIn: 'root'
})
export class ScalesService {
  scales : Scale[];

  constructor(private notes_service : NotesService) {
    this.scales = [
      new Scale(
        "Major",
        [2, 4, 5, 7, 9, 11])
    ];
  }

  public generate_scale(settings : Settings) : Scale {
    // Filter scales according to settings
    let filtered_scales = this.scales.filter(el => settings.get(el.name).enabled);

    let scale_index = Math.floor(Math.random() * filtered_scales.length);
    let scale = filtered_scales[scale_index].clone();

    // Filter root notes according to settings
    let filtered_roots = this.notes_service.get_notes(settings.get("Whole roots").enabled, settings.get("Altered roots").enabled);
    let root_index = Math.floor(Math.random() * filtered_roots.length);
    let root_note = filtered_roots[root_index];

    // Compute the notes 
    scale.notes.push(root_note);
    for(let interval of scale.intervals_in_half_step) {
      scale.notes.push(this.notes_service.solve_interval_from_note(root_note, interval));
    }

    // Pick a degree between 1 and scale.notes.length - 2
    scale.degree_question_index = Math.floor(Math.random() * (scale.notes.length - 1)) + 1;

    return scale;
  }
}
