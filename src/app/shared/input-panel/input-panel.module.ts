import { NgModule } from '@angular/core';
import { AnswerInputComponent } from './components/answer-input/answer-input.component';
import { CheckButtonComponent } from './components/check-button/check-button.component';

@NgModule({
  declarations: [
    AnswerInputComponent,
    CheckButtonComponent
  ],
  imports: [
  ],
  exports: [
    AnswerInputComponent,
    CheckButtonComponent
  ],
  providers: [],
  bootstrap: []
})
export class InputPanelModule { }
