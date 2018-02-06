import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';


import { SampleModule } from 'sturgeon';
import { SampleService } from 'sturgeon';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SampleModule.forRoot()
  ],
  providers: [SampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
