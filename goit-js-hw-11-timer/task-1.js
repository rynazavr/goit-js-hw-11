const refs = {
  divBox: document.querySelector("#timer-1"),
  dataDays: document.querySelector('span[data-value="days"]'),
  dataHours: document.querySelector('span[data-value="hours"]'),
  dataMinutes: document.querySelector('span[data-value="mins"]'),
  dataSeconds: document.querySelector('span[data-value="secs"]'),
};
const timer = {
  start() {
    const targetDate = new Date("Jul 17, 2020");
    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = targetDate - currentTime;
      //   console.log(deltaTime);
      updateTimer(deltaTime);
    }, 1000);
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

/*
class CountdownTimer {
    constructor(
        { selector, targetDate })
    {
    this.selector = selector;
    this.targetDate = targetDate;
    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = targetDate - currentTime;
    }, 1000);
  }
}


 
new CountdownTimer({
    selector: "#timer-1",
    targetDate: new Date("Jul 17, 2019"),
});
*/
