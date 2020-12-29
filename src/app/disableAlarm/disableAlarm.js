let disableAlarmButton = document.getElementById("disable-alarm");
let displayAlarmTime = document.getElementById("alarm-set-time");

export function disableAlarm() {
  disableAlarmButton.addEventListener("click", function () {
    // When button is clicked Alarm Disabled is displayed, Alarm sound is paused
    displayAlarmTime.innerText = "Alarm Disabled";
    alarmSound.pause();
  });
}
