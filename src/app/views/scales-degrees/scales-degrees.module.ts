import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { ScalesDegreesView } from './scales-degrees.view';

@NgModule({
  declarations: [
    ScalesDegreesView
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ScalesDegreesView
  ]
})
export class ScalesDegreesModule { }
