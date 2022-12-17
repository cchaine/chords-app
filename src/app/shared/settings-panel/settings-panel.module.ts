import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsPanelComponent } from './settings-panel.component';
import { SettingsEntryComponent } from './components/settings-entry/settings-entry.component';

@NgModule({
  declarations: [
    SettingsPanelComponent,
    SettingsEntryComponent
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
