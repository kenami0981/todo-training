import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponentModule } from 'projects/navigation/src/lib/adapters/primary/ui/navbar.component-module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap/collapse'
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarComponentModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    AngularFireModule.initializeApp(environment.firestoreConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
