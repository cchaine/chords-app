import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { TitleButtonComponent } from './components/title-button/title-button.component';
import { SettingsPanelComponent } from './components/settings-panel/settings-panel.component';
import { SettingsEntryComponent } from './components/settings-entry/settings-entry.component';
import { AnswerInputComponent } from './components/answer-input/answer-input.component';
import { CheckButtonComponent } from './components/check-button/check-button.component';

@NgModule({
  declarations: [
    AppComponent,
    KeyboardComponent,
    TitleButtonComponent,
    SettingsPanelComponent,
    SettingsEntryComponent,
    AnswerInputComponent,
    CheckButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
