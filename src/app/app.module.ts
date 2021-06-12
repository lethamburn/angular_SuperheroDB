import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryAllComponent } from './shared/components/gallery-all/gallery-all.component';
import { AllCharactersPageComponent } from './pages/all-characters-page/all-characters-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './core/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailCharactersPageComponent } from './pages/all-characters-page/detail-characters-page/detail-characters-page.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryAllComponent,
    AllCharactersPageComponent,
    HomePageComponent,
    HeaderComponent,
    DetailCharactersPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
