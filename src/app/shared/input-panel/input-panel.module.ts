import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnswerInputComponent } from './components/answer-input/answer-input.component';
import { CheckButtonComponent } from './components/check-button/check-button.component';

@NgModule({
  declarations: [
    AnswerInputComponent,
    CheckButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AnswerInputComponent,
    CheckButtonComponent
  ],
  providers: [],
  bootstrap: []
})
export class InputPanelModule { }
