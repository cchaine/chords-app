import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { FourNoteChordsComponent } from './four-note-chords.component';

@NgModule({
  declarations: [
    FourNoteChordsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    FourNoteChordsComponent
  ]
})
export class FourNoteChordsModule { }
