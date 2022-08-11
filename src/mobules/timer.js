const timer = (stopAction) => {
  const timerDay = document.querySelectorAll('.count_1'),
    timerHours = document.querySelectorAll('.count_2'),
    timerMinutes = document.querySelectorAll('.count_3'),
    timerSeconds = document.querySelectorAll('.count_4');

  let idInterval = 0;

  const getTimeRemaining = () => {
    const dateStop = new Date(stopAction).getTime(),
      dateNow = new Date().getTime(),
      timeRemaining = (dateStop - dateNow) / 1000,
      seconds = Math.floor(timeRemaining % 60),
      minutes = Math.floor((timeRemaining / 60) % 60),
      hours = Math.floor((timeRemaining / 3600) % 24),
      days = Math.floor(timeRemaining / 3600 / 24);

    if (timeRemaining > 0) {
      return {
        timeRemaining,
        days,
        hours,
        minutes,

        seconds,
      };
    } else {
      return {
        timeRemaining: 0,
        days: 0,
        hours: 0,
        minutes: 0,

        seconds: 0,
      };
    }
  };

  const checkZero = (itemTime) => {
    if (itemTime < 10) {
      return `0${itemTime}`;
    } else {
      return itemTime;
    }
  };

  const updateClock = () => {
    const { days, hours, minutes, seconds, timeRemaining } = getTimeRemaining();

    timerDay.forEach((dayItme) => {
      const day = dayItme.querySelector('span');
      day.textContent = checkZero(days);
    });

    timerHours.forEach((hourItme) => {
      const hour = hourItme.querySelector('span');
      hour.textContent = checkZero(hours);
    });

    timerMinutes.forEach((minutItme) => {
      const minut = minutItme.querySelector('span');
      minut.textContent = checkZero(minutes);
    });

    timerSeconds.forEach((secondItme) => {
      const second = secondItme.querySelector('span');
      second.textContent = checkZero(seconds);
    });

    if (timeRemaining < 0) {
      clearInterval(idInterval);
    }
  };

  updateClock();
  idInterval = setInterval(updateClock, 1000);
};

export default timer;
