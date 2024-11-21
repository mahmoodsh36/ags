import { App } from "astal/gtk3"
import style from "./style.scss"
import Bar from "./widget/Bar2"
import Applauncher from "./widget/Applauncher"

App.start({
    css: style,
    main() {
        App.get_monitors().map(Bar)
    },
})
