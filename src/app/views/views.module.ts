import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { IntervalsFromComponent } from './intervals-from/intervals-from.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    IntervalsFromComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    IntervalsFromComponent
  ]
})
export class ViewsModule { }
