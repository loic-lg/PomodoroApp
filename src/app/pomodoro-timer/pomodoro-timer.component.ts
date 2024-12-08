import { Component } from '@angular/core';

@Component({
  selector: 'app-pomodoro-timer',
  standalone: true,
  templateUrl: './pomodoro-timer.component.html',
  styleUrls: ['./pomodoro-timer.component.css'],
})
export class PomodoroTimerComponent {
  totalWorkDuration: number = 25 * 60;
  totalShortBreak: number = 5 * 60;
  totalLongBreak: number = 20 * 60;
  timeLeft: number = this.totalWorkDuration;
  isRunning: boolean = false;
  isBreak: boolean = false;
  timer: any;
  progress: number = 0;

  totalCycles: number = 4;
  completedCycles: number = 0;
  remainingCycles: number = this.totalCycles;

  startTimer() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.animateApple(true);
      this.timer = setInterval(() => {
        if (this.timeLeft > 0) {
          this.timeLeft--;
          this.calculateProgress(); //maj apple animation
        } else {
          this.completeCycleOrBreak();
        }
      }, 1000);
    }
  }

  stopTimer() {
    if (this.timer) {
      clearInterval(this.timer);
      this.isRunning = false;
      this.animateApple(false); // stop apple animation
    }
  }

  resetTimer() {
    this.stopTimer();
    this.timeLeft = this.totalWorkDuration;
    this.progress = 0;
    this.completedCycles = 0;
    this.remainingCycles = this.totalCycles;
    this.animateApple(false);
  }

  calculateProgress() {
    const totalDuration = this.isBreak
      ? this.completedCycles === this.totalCycles
        ? this.totalLongBreak
        : this.totalShortBreak
      : this.totalWorkDuration;

    this.progress = ((totalDuration - this.timeLeft) / totalDuration) * 100;
  }

  formatTime(): string {
    const minutes = Math.floor(this.timeLeft / 60);
    const seconds = this.timeLeft % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  animateApple(shouldAnimate: boolean) {
    const apple = document.querySelector('.apple') as HTMLElement;
    if (shouldAnimate) {
      apple.classList.add('animate');
    } else {
      apple.classList.remove('animate'); // to stop animation
    }
  }

  completeCycleOrBreak() {
    this.stopTimer();

    if (!this.isBreak) {
      this.completedCycles++;
      this.remainingCycles = this.totalCycles - this.completedCycles;

      if (this.completedCycles < this.totalCycles) {
        this.isBreak = true;
        this.timeLeft = this.totalShortBreak;
        alert('Prenez une pause de 5 minutes.');
      } else {

        alert('Félicitation ! Vous avez terminé 4 cycles. Prenez une pause de 20 minutes.');
        this.isBreak = true;
        this.timeLeft = this.totalLongBreak;
      }
    } else {
      if (this.remainingCycles > 0) {
        this.isBreak = false;
        this.timeLeft = this.totalWorkDuration;
        alert('Recommencez le travail en appuyant sur Start.');
      } else {
        alert('Session complète terminée. Bravo!');
      }
    }
  }


}
