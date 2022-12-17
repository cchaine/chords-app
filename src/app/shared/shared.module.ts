import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputPanelModule } from './input-panel/input-panel.module';
import { KeyboardModule } from './keyboard/keyboard.module';
import { SettingsPanelModule } from './settings-panel/settings-panel.module';
import { SkipButtonModule } from './skip-button/skip-button.module';
import { TitleButtonModule } from './title-button/title-button.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    KeyboardModule,
    InputPanelModule,
    SettingsPanelModule,
    SkipButtonModule,
    TitleButtonModule
  ],
  exports: [
    CommonModule,
    KeyboardModule,
    InputPanelModule,
    SettingsPanelModule,
    SkipButtonModule,
    TitleButtonModule
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
