import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnswerInputComponent } from './components/answer-input/answer-input.component';
import { CheckButtonComponent } from './components/check-button/check-button.component';
import { InputPanelComponent } from './input-panel.component';

@NgModule({
  declarations: [
    AnswerInputComponent,
    CheckButtonComponent,
    InputPanelComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AnswerInputComponent,
    CheckButtonComponent,
    InputPanelComponent
  ],
  providers: [],
  bootstrap: []
})
export class InputPanelModule { }
