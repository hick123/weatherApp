import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import {HttpModule} from '@angular/http'
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { NgxSpinnerModule } from "ngx-spinner";
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatTabsModule,
  MatCardModule,
  MatInputModule
} from "@angular/material";
import { WeatherComponent } from './weather/weather.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeatherService } from './weather.service';

@NgModule({
  declarations: [AppComponent, WeatherComponent],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatGridListModule,
    MatTabsModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    HttpModule,
    FormsModule,
    NgxSpinnerModule,
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule {}
