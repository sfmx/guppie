import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { SampleModule } from 'sturgeon';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SampleModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
