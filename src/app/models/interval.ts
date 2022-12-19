import { Note } from './note';

export class Interval {
  size_in_half_step : number;
  name : string;
  is_up : boolean;
  root : Note;
  answer : Note;

  public constructor(size_in_half_step : number, name : string) {
    this.size_in_half_step = size_in_half_step;
    this.name = name;
  }
}
