import { Component } from '@angular/core';
import { shareReplay } from 'rxjs';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Playbook';
  links = [
    { path: '/home', icon: 'home', title: 'Home' },
    { path: '/plays', icon: 'dashboard', title: 'Play Library' },
    { path: '/schedule', icon: 'calendar_today', title: 'Schedule'},
  ];

  schedule = [
    { path: '/schedule/notes', icon: 'notes', title: 'Week Notes' },
    { path: '/schedule/library', icon: 'gamepad', title: 'Week Library'},

    ]

  constructor(private authService: AuthService) { }

  isAuthenticated$ = this.authService.isAuthenticated$.pipe(shareReplay(1));

  logout() {
    this.authService.logout();
  }
}
