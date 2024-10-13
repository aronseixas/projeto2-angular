import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentsModel } from './components/components.model';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
