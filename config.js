import { applauncher } from "./applauncher.js"
import { Bar } from "./bar.js"
import { NotificationPopups } from "./notificationPopups.js"

App.config({
  style: App.configDir + "/style.css",
  windows: [applauncher, Bar(0), NotificationPopups(),],
})