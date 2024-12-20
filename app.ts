import { App } from "astal/gtk3"
import style from "./style.scss"
import Bar from "./widget/Bar"
import Applauncher from "./widget/Applauncher"
import NotificationPopups from "./widget/NotificationPopups"

App.start({
    css: style,
    main() {
        App.get_monitors().map(Bar)
        Applauncher()
        App.get_window("launcher")!.hide() // dont show launcher on startup
        App.get_monitors().map(NotificationPopups)
    },
})
