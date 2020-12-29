export function playAlarm() {
  // if the selected alarm and the current time match the alarm plays
  // alarm stops playing after 60 seconds
  displayAlarmTime.innerText == hours.innerText + ":" + minutes.innerText
    ? alarmSound.play()
    : setTimeout(function () {
        alarmSound.pause();
      }, 60000);
}
