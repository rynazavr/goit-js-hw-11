const refs = {
  dataDays: document.querySelector('span[data-value="days"]'),
  dataHours: document.querySelector('span[data-value="hours"]'),
  dataMinutes: document.querySelector('span[data-value="mins"]'),
  dataSeconds: document.querySelector('span[data-value="secs"]'),
};

const timer = {
  start() {
    const targetDate = new Date("Jul 17, 2020");
    if (Date.now() < targetDate) {
      timerId = setInterval(() => {
        const currentTime = Date.now();
        const deltaTime = targetDate - currentTime;
        updateTimer(deltaTime);
      }, 1000);
    } else {
      clearInterval(timerId);
    }
  },
};
timer.start();

function updateTimer(time) {
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const minutes = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const seconds = pad(Math.floor((time % (1000 * 60)) / 1000));

  refs.dataDays.textContent = days;
  refs.dataHours.textContent = hours;
  refs.dataMinutes.textContent = minutes;
  refs.dataSeconds.textContent = seconds;
}
function pad(value) {
  return String(value).padStart(2, "0");
}

// class CountdownTimer {
//   constructor({ selector, targetDate }) {
//     this._selector = selector;
//     this._targetDate = targetDate;
//   }
//   start() {
//     if (Date.now() < this._targetDate) {
//       timerId = setInterval(() => {
//         const currentTime = Date.now();
//         const deltaTime = this._targetDate - currentTime;
//         updateTimer(deltaTime);
//       }, 1000);
//     } else {
//       clearInterval(timerId);
//     }
//   }
//   function updateTimer(time) {
//     const days = Math.floor(time / (1000 * 60 * 60 * 24));
//     const hours = pad(
//       Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
//     );
//     const minutes = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//     const seconds = pad(Math.floor((time % (1000 * 60)) / 1000));
//     const timer1 = document.querySelector(`${this._selector}`);
//     const dataDays = timer1.querySelector('[data-value="days"]');
//     const dataHours = timer1.querySelector('[data-value="hours"]');
//     const dataMinutes = timer1.querySelector('[data-value="mins"]');
//     const dataSeconds = timer1.querySelector('[data-value="secs"]');
//     dataDays.textContent = days;
//     dataHours.textContent = hours;
//     dataMinutes.textContent = minutes;
//     dataSeconds.textContent = seconds;
//   }
//   function pad(value) {
//     return String(value).padStart(2, "0");
//   }
// }

// const newTimer = new CountdownTimer({
//   selector: "#timer-1",
//   targetDate: new Date("Jul 17, 2020"),
// });
// newTimer.start();
