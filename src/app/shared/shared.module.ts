import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconButtonModule } from './icon-button/icon-button.module';
import { InputPanelModule } from './input-panel/input-panel.module';
import { KeyboardModule } from './keyboard/keyboard.module';
import { SettingsPanelModule } from './settings-panel/settings-panel.module';
import { TextButtonModule } from './text-button/text-button.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    IconButtonModule,
    KeyboardModule,
    InputPanelModule,
    SettingsPanelModule,
    TextButtonModule
  ],
  exports: [
    CommonModule,
    IconButtonModule,
    KeyboardModule,
    InputPanelModule,
    SettingsPanelModule,
    TextButtonModule
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
