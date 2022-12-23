import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionCarouselComponent } from './question-carousel.component';

@NgModule({
  declarations: [
    QuestionCarouselComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    QuestionCarouselComponent
  ],
  providers: [],
  bootstrap: []
})
export class QuestionCarouselModule { }
