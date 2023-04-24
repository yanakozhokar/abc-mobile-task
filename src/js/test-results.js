const resultsTimerRef = document.querySelector('.results__timer');

class Timer {
  constructor() {
    this.intervalID = null;
  }

  start({ hours, minutes, seconds }) {
    const initialTime = Date.now();
    const setTime = hours * 3600 * 1000 + minutes * 60 * 1000 + seconds * 1000;

    this.intervalID = setInterval(() => {
      const currentTime = Date.now();
      const difference = currentTime - initialTime;
      const restTime = this.convertTime(setTime - difference);
      this.showTimer(restTime);
      if (
        restTime.hours === 0 &&
        restTime.minutes === 0 &&
        restTime.seconds === 0
      ) {
        clearInterval(this.intervalID);
        return;
      }
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalID);
  }

  convertTime(milliseconds) {
    const hours = Math.floor(milliseconds / 1000 / 3600);
    const minutes = Math.floor(
      (milliseconds - hours * 3600 * 1000) / 1000 / 60
    );
    const seconds = Math.floor(
      (milliseconds - hours * 1000 * 3600 - minutes * 60 * 1000) / 1000
    );
    return { hours, minutes, seconds };
  }

  showTimer({ hours, minutes, seconds }) {
    if (hours < 10) {
      hours = `0${hours}`;
    }
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    resultsTimerRef.textContent = `${minutes}:${seconds}`;
  }
}

const timer = new Timer();

timer.start({ hours: 0, minutes: 10, seconds: 0 });
