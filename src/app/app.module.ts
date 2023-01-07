import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Router } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './estrutura/header/header.component';
import { FooterComponent } from './estrutura/footer/footer.component';
import { HomeComponent } from './estrutura/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ChefsComponent } from './pages/chefs/chefs.component';
import { ContactComponent } from './pages/contact/contact.component';
import { rootRounterConfig } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    MenuComponent,
    ChefsComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    [RouterModule.forRoot(rootRounterConfig)]


  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
