import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeButtonComponent } from './home-button.component';

@NgModule({
  declarations: [
    HomeButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeButtonComponent
  ],
  providers: [],
  bootstrap: []
})
export class HomeButtonModule { }
