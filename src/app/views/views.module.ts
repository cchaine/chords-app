import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { MenuModule } from './menu/menu.module';
import { IntervalsFromModule } from './intervals-from/intervals-from.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SharedModule,
    IntervalsFromModule,
    MenuModule,
  ],
  exports: [
    IntervalsFromModule,
    MenuModule
  ]
})
export class ViewsModule { }
