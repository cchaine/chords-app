import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { MenuModule } from './menu/menu.module';
import { IntervalsFromModule } from './intervals-from/intervals-from.module';
import { FourNoteChordsModule } from './four-note-chords/four-note-chords.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SharedModule,
    IntervalsFromModule,
    MenuModule,
    FourNoteChordsModule,
  ],
  exports: [
    IntervalsFromModule,
    MenuModule,
    FourNoteChordsModule
  ]
})
export class ViewsModule { }
