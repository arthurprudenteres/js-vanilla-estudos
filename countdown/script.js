const dias = document.getElementById("dias");
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

const newYear = "1 Jan 2024";

const countdown = () => {
  const actualTime = new Date();
  const targetDate = new Date(newYear);

  const totalSeconds = (targetDate - actualTime) / 1000;

  const secondsLeft = (totalSeconds % 60).toFixed(0);
  const minutesLeft = ((totalSeconds / 60) % 60).toFixed(0);
  const hoursLeft = ((totalSeconds / 3600) % 24).toFixed(0);
  const daysLeft = ((totalSeconds / 3600 / 24)).toFixed(0);

  dias.innerHTML = daysLeft;
  horas.innerHTML = formatTime(hoursLeft);
  minutos.innerHTML = formatTime(minutesLeft);
  segundos.innerHTML = formatTime(secondsLeft);
};

const formatTime = (e) => {
  return e < 10 ? "0"+e : e;
}

setInterval(countdown, 1000);
