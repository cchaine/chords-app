import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { IntervalsFromComponent } from './intervals-from.component';

@NgModule({
  declarations: [
    IntervalsFromComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    IntervalsFromComponent
  ]
})
export class IntervalsFromModule { }
