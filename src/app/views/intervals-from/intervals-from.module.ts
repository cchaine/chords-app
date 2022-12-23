import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { IntervalsFromView } from './intervals-from.view';

@NgModule({
  declarations: [
    IntervalsFromView
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    IntervalsFromView
  ]
})
export class IntervalsFromModule { }
