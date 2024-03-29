import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconButtonModule } from './icon-button/icon-button.module';
import { InputPanelModule } from './input-panel/input-panel.module';
import { KeyboardModule } from './keyboard/keyboard.module';
import { SettingsPanelModule } from './settings-panel/settings-panel.module';
import { TextButtonModule } from './text-button/text-button.module';
import { QuestionCarouselModule } from './question-carousel/question-carousel.module';

import { ChordsService, ScalesService, IntervalsService, NotesService, SettingsService, ThemeService } from '@services';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    IconButtonModule,
    KeyboardModule,
    InputPanelModule,
    SettingsPanelModule,
    TextButtonModule,
    QuestionCarouselModule,
  ],
  exports: [
    CommonModule,
    IconButtonModule,
    KeyboardModule,
    InputPanelModule,
    SettingsPanelModule,
    TextButtonModule,
    QuestionCarouselModule
  ],
  providers: [
    ChordsService,
    ScalesService,
    IntervalsService,
    NotesService,
    SettingsService,
    ThemeService
  ],
  bootstrap: []
})
export class SharedModule { }
