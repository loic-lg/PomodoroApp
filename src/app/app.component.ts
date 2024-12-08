import { Component } from '@angular/core';
import { PomodoroTimerComponent } from './pomodoro-timer/pomodoro-timer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PomodoroTimerComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pomodoro-app';
}
