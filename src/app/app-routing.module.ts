import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './login/auth.guard';
import { HomeComponent } from './login/home/home.component';
import { LoginComponent } from './login/login/login.component';
import { PlayDetailComponent } from './main/plays/play-detail/play-detail.component';
import { PlaysComponent } from './main/plays/plays/plays.component';
import { WeekLibraryDetailsComponent } from './main/schedule/week-library-details/week-library-details.component';
import { WeekLibraryComponent } from './main/schedule/week-library/week-library.component';
import { WeekNotesDetailsComponent } from './main/schedule/week-notes-details/week-notes-details.component';
import { WeekNotesComponent } from './main/schedule/week-notes/week-notes.component';
import { WeeksComponent } from './main/schedule/weeks/weeks.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard], },
  { path: 'plays', component: PlaysComponent},
  { path: 'plays/:title', component: PlayDetailComponent },
  { 
    path: 'schedule', component: WeeksComponent,
    children: [
      { path: 'notes', component: WeekNotesComponent}, 
      { path: 'notes/:id', component: WeekNotesDetailsComponent},
      { path: 'library', component: WeekLibraryComponent},
      { path: 'library/:id', component: WeekLibraryDetailsComponent},
    ]
  },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }