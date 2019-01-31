import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserFbLoginComponent } from './components/user-fb-login/user-fb-login.component';

@NgModule({
  declarations: [
    AppComponent,
    UserFbLoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
