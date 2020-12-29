let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

export function updateTime() {
  // Gets the current hour, minute, and second
  let today = new Date();
  hours.innerText = today.getHours();
  minutes.innerText = today.getMinutes();
  seconds.innerText = today.getSeconds();

  // adds a 0 to hour if less than 10
  hours.innerText < 10 ? (hours.innerText = "0" + hours.innerText) : "";
  // adds a 0 to minute if less than 10
  minutes.innerText < 10 ? (minutes.innerText = "0" + minutes.innerText) : "";
  // adds a 0 to second if less than 10
  seconds.innerText < 10 ? (seconds.innerText = "0" + seconds.innerText) : "";
}
