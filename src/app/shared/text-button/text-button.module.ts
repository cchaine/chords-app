import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextButtonComponent } from './text-button.component';

@NgModule({
  declarations: [
    TextButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TextButtonComponent
  ],
  providers: [],
  bootstrap: []
})
export class TextButtonModule { }
