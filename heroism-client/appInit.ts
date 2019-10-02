import { app } from "https://unpkg.com/hyperapp";
import { MainView } from "./components/Main";

export function main(container: Element) {
    app({
        init: { value: "State" },
        view: MainView,
        node: container,
    });
}
