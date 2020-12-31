let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let displayAlarmTime = document.getElementById("alarm-set-time");

export function playAlarm() {
  // if the selected alarm and the current time match the alarm plays
  // alarm stops playing after 60 seconds
  displayAlarmTime.innerText == hours.innerText + ":" + minutes.innerText
    ? alarmSound.play()
    : setTimeout(function () {
        alarmSound.pause();
      }, 60000);
}
