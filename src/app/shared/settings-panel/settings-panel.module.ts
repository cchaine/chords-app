import { NgModule } from '@angular/core';
import { SettingsPanelComponent } from './settings-panel.component';
import { SettingsEntryComponent } from './components/settings-entry/settings-entry.component';

@NgModule({
  declarations: [
    SettingsPanelComponent,
    SettingsEntryComponent
  ],
  imports: [
  ],
  exports: [
    SettingsPanelComponent
  ],
  providers: [],
  bootstrap: []
})
export class SettingsPanelModule { }88
