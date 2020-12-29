let addHour = document.getElementById("add-hour");
let addMinute = document.getElementById("add-minute");

// adds the dropdown options for the 24 hours
export function addToHourDropdown() {
  for (let hour = 1; hour <= 24; hour++) {
    let option = document.createElement("option");
    option.text = hour;
    option.text < 10 ? (option.text = "0" + option.text) : "";
    addHour.add(option);
  }
}

// adds the dropdown options for the 60 minutes
export function addToMinuteDropdown() {
  for (let minute = 0; minute <= 59; minute++) {
    let option = document.createElement("option");
    option.text = minute;
    option.text < 10 ? (option.text = "0" + option.text) : "";
    addMinute.add(option);
  }
}
