import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoniComponent } from './roni/roni.component';
import { RoniTwoComponent } from './roni-two/roni-two.component';

@NgModule({
  declarations: [
    AppComponent,
    RoniComponent,
    RoniTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
