import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { MenuComponent } from './menu.component';
import { MenuButtonComponent } from './components/menu-button/menu-button.component';

@NgModule({
  declarations: [
    MenuComponent,
    MenuButtonComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }
