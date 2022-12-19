import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyboardComponent } from './keyboard.component';

@NgModule({
  declarations: [
    KeyboardComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    KeyboardComponent
  ],
  providers: [],
  bootstrap: []
})
export class KeyboardModule { }
