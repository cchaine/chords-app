import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsPanelComponent } from './settings-panel.component';
import { PresetSelectorComponent } from './components/preset-selector/preset-selector.component';

@NgModule({
  declarations: [
    SettingsPanelComponent,
    PresetSelectorComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SettingsPanelComponent
  ],
  providers: [],
  bootstrap: []
})
export class SettingsPanelModule { }
