import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-timer",
  templateUrl: "./timer.component.html",
  styleUrls: ["./timer.component.scss"],
})
export class TimerComponent {
  readonly intervalStep: number = 10;
  timer: any = null;
  time: number = 0;
  @Input() totalMinutes: number;
  @Output() totalMinutesChange = new EventEmitter<number>();
  isRunning: boolean = false;

  constructor() {}

  toggleTimer() {
    if (this.timer) {
      this.stopTimer();
    } else {
      this.startTimer();
    }
  }

  startTimer() {
    this.isRunning = true;
    this.time = 0;
    var prevTickTimestamp = Date.now();

    this.timer = setInterval(() => {
      let currentTickTimestamp = Date.now();
      this.time += currentTickTimestamp - prevTickTimestamp;

      prevTickTimestamp = currentTickTimestamp;
    }, this.intervalStep);
  }

  stopTimer() {
    clearInterval(this.timer);
    this.totalMinutes = Math.ceil(this.time / 1000 / 60);
    this.totalMinutesChange.emit(this.totalMinutes);
    this.isRunning = false;
    this.timer = null;
  }

  get seconds() {
    return Math.floor(this.time / 1000) % 60;
  }

  get minutes() {
    return Math.floor(this.time / 1000 / 60);
  }
}
