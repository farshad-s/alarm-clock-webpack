let addAlarmButton = document.getElementById("add-alarm-button");
let selectedHour = document.getElementById("add-hour");
let selectedMinute = document.getElementById("add-minute");
let displayAlarmTime = document.getElementById("alarm-set-time");

export function alarmSet() {
  addAlarmButton.addEventListener("click", function () {
    // When button is clicked hour equals selected hour, minute equals selected minute from dropdown menu
    let alarmHour = selectedHour.options[selectedHour.selectedIndex];
    let alarmMinute = selectedMinute.options[selectedMinute.selectedIndex];
    // if add alarm is clicked whilst the option is Select Hour or Select Minute, it will return Time Not Selected
    // otherwise the selected alarm time is displayed
    alarmHour.value == "" || alarmMinute.value == ""
      ? (displayAlarmTime.innerText = "Time not selected")
      : (displayAlarmTime.innerText = alarmHour.text + ":" + alarmMinute.text);
  });
}
