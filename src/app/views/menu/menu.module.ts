import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { MenuView } from './menu.view';
import { MenuButtonComponent } from './components/menu-button/menu-button.component';

@NgModule({
  declarations: [
    MenuView,
    MenuButtonComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    MenuView
  ]
})
export class MenuModule { }
