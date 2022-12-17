import { NgModule } from '@angular/core';
import { InputPanelModule } from './input-panel/input-panel.module';
import { KeyboardModule } from './keyboard/keyboard.module';
import { SettingsPanelModule } from './settings-panel/settings-panel.module';
import { SkipButtonModule } from './skip-button/skip-button.module';
import { TitleButtonModule } from './title-button/title-button.module';

@NgModule({
  declarations: [
  ],
  imports: [
    KeyboardModule,
    InputPanelModule,
    SettingsPanelModule,
    SkipButtonModule,
    TitleButtonModule
  ],
  exports: [
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
