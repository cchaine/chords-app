import { Note } from '@models/note';

export class Chord {
  names : string[];
  intervals_in_half_step : number[];
  answers : Note[];

  public constructor(names : string[], intervals_in_half_step : number[]) {
    this.names = names;
    this.intervals_in_half_step = intervals_in_half_step;
    this.answers = [];
  }
}
