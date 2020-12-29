import { addToHourDropdown, addToMinuteDropdown } from "./addToDropdown";
import { alarmSet } from "./alarmSet";
import { disableAlarm } from "./disableAlarm";
import { playAlarm } from "./playAlarm";
import { updateTime } from "./updateTime";

import "@styles/main.scss";

const App = () => {
  addToHourDropdown();
  addToMinuteDropdown();
  alarmSet();
  setInterval(updateTime, 1000);
  setInterval(playAlarm, 1000);
  disableAlarm();
};

App();
