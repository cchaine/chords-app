import { Component } from '@angular/core';

@Component({
  selector: 'question-carousel',
  templateUrl: './question-carousel.component.html',
  styleUrls: ['./question-carousel.component.scss']
})
export class QuestionCarouselComponent {
  question_top : string = "";
  question_bottom : string = "";

  next_question_top : string = "";
  next_question_bottom: string = "";

  switching : boolean = false;

  public next(question_top: string, question_bottom: string) {
    // Check if there was already a question
    if(!this.question_top && !this.question_bottom) {
      // No transition in this case
      this.question_top = question_top;
      this.question_bottom = question_bottom;
    } else {
      // Set the question on the right
      this.next_question_top = question_top;
      this.next_question_bottom = question_bottom;
      // Move both to the left with a transition
      this.switching = true;
      setTimeout(() => {
        // Once moved
        // Set the question on the left with the new question
        this.question_top = this.next_question_top;
        this.question_bottom = this.next_question_bottom;
        // Move both questions instantly to the right
        this.switching = false;
      }, 300);
    }
  }
}
