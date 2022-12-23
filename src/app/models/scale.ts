import { Note } from '@models';

export class Scale {
  name : string;
  intervals_in_half_step : number[];
  notes : Note[];

  // Used to pass data to the view
  degree_question_index : number;

  public constructor(name : string, intervals_in_half_step : number[]) {
    this.name = name;
    this.intervals_in_half_step = intervals_in_half_step;
    this.notes = [];
  }

  public clone() : Scale {
    return new Scale(this.name, this.intervals_in_half_step);
  }
}
