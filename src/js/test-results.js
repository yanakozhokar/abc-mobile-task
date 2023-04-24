const callBtnRef = document.querySelector('.results__call-btn');
const resultsTimerRef = document.querySelector('.results__timer');

callBtnRef.addEventListener('click', onCallBtnClick);

function onCallBtnClick() {
  fetch(`https://swapi.dev/api/people/1/`)
    .then(data => data.json())
    .then(data => {
      addMarkup(data);
    });
}

function addMarkup(data) {
  const {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
    homeworld,
    films,
    species,
    vehicles,
    starships,
    created,
    edited,
    url,
  } = data;

  const markup = `<div class="results__request">
      <p class="results__request-characteristic">
        <span class="bold-lowercase">Name: </span>${name}
      </p>
      <p class="results__request-characteristic">
        <span class="bold-lowercase">Height: </span>${height}
      </p>
      <p class="results__request-characteristic">
        <span class="bold-lowercase">Mass: </span>${mass}
      </p>
      <p class="results__request-characteristic">
        <span class="bold-lowercase">Hair color: </span>${hair_color}
      </p>
      <p class="results__request-characteristic">
        <span class="bold-lowercase">Skin color: </span>${skin_color}
      </p>
      <p class="results__request-characteristic">
        <span class="bold-lowercase">Eye color: </span>${eye_color}
      </p>
      <p class="results__request-characteristic">
        <span class="bold-lowercase">Birth year: </span>${birth_year}
      </p>
      <p class="results__request-characteristic">
        <span class="bold-lowercase">Gender: </span>${gender}
      </p>
      <p class="results__request-characteristic">
        <span class="bold-lowercase">Homeworld: </span>${homeworld}
      </p>
      <p class="results__request-characteristic">
        <span class="bold-lowercase">Films: </span>${films
          .map(el => el)
          .join(' ')}
      </p>
      <p class="results__request-characteristic">
        <span class="bold-lowercase">Species: </span>${species
          .map(el => el)
          .join(' ')}
      </p>
      <p class="results__request-characteristic">
        <span class="bold-lowercase">Vehicles: </span>${vehicles
          .map(el => el)
          .join(' ')}
      </p>
      <p class="results__request-characteristic">
        <span class="bold-lowercase">Starships: </span>${starships
          .map(el => el)
          .join(' ')}
      </p>
      <p class="results__request-characteristic">
        <span class="bold-lowercase">Created: </span>${created}
      </p>
      <p class="results__request-characteristic">
        <span class="bold-lowercase">Edited: </span>${edited}
      </p>
      <p class="results__request-characteristic">
        <span class="bold-lowercase">Url: </span>${url}
      </p>
    </div>`;

  callBtnRef.insertAdjacentHTML('afterend', markup);
}

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
