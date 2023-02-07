import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login/login.component';
import { HomeComponent } from './login/home/home.component';
import { PlaysComponent } from './main/plays/plays/plays.component';
import { PlaysListComponent } from './main/plays/plays-list/plays-list.component';
import { PlayDetailComponent } from './main/plays/play-detail/play-detail.component';
import { WeeksComponent } from './main/schedule/weeks/weeks.component';
import { WeekNotesComponent } from './main/schedule/week-notes/week-notes.component';
import { WeekLibraryComponent } from './main/schedule/week-library/week-library.component';
import { WeekNotesDetailsComponent } from './main/schedule/week-notes-details/week-notes-details.component';
import { WeekLibraryDetailsComponent } from './main/schedule/week-library-details/week-library-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PlaysComponent,
    PlaysListComponent,
    PlayDetailComponent,
    WeeksComponent,
    WeekNotesComponent,
    WeekLibraryComponent,
    WeekNotesDetailsComponent,
    WeekLibraryDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
