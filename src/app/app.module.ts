import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViewsModule } from '@views/views.module';
import { SharedModule } from '@shared/shared.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ViewsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
