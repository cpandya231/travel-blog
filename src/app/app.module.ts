import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SightsComponent } from './sights/sights.component';
import { HomeComponent } from './home/home.component';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { ParallaxModule, ParallaxConfig } from 'ngx-parallax';
import { NgwWowModule } from 'ngx-wow';
@NgModule({
  declarations: [
    AppComponent,
    SightsComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPageScrollCoreModule.forRoot({duration: 1250}),
    NgxPageScrollModule,
    ParallaxModule,
    NgwWowModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
