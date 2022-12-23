import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { MenuModule } from './menu/menu.module';
import { IntervalsFromModule } from './intervals-from/intervals-from.module';
import { FourNoteChordsModule } from './four-note-chords/four-note-chords.module';
import { ScalesDegreesModule } from './scales-degrees/scales-degrees.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SharedModule,
    IntervalsFromModule,
    MenuModule,
    FourNoteChordsModule,
    ScalesDegreesModule
  ],
  exports: [
    IntervalsFromModule,
    MenuModule,
    FourNoteChordsModule,
    ScalesDegreesModule
  ]
})
export class ViewsModule { }
