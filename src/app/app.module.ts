import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppComponent } from './app.component';
import { HeaderNavigationComponent } from './header-navigation/header-navigation.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { DictionaryApiComponent } from './dictionary-api/dictionary-api.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavigationComponent,
    SearchBarComponent,
    SearchResultsComponent,
    DictionaryApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  entryComponents: [
    DictionaryApiComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
