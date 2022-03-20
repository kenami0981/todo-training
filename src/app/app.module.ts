import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponentModule } from 'projects/navigation/src/lib/adapters/primary/ui/navbar.component-module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
