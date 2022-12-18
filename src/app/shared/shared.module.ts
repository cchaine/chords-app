import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeButtonModule } from './home-button/home-button.module';
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
    HomeButtonModule,
    KeyboardModule,
    InputPanelModule,
    SettingsPanelModule,
    SkipButtonModule,
    TitleButtonModule
  ],
  exports: [
    CommonModule,
    HomeButtonModule,
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
