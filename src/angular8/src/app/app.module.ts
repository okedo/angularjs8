import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CookieModule } from 'ngx-cookie';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ForbiddenPageComponent } from './forbidden-page/forbidden-page.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    ForbiddenPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CookieModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
