import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { FourNoteChordsView } from './four-note-chords.view';

@NgModule({
  declarations: [
    FourNoteChordsView
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    FourNoteChordsView
  ]
})
export class FourNoteChordsModule { }
