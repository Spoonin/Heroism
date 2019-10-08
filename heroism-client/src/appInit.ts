import { app } from "hyperapp";
import { MainView } from "./components/Main";

app({
    init: {
        currentPage: "SignUp",
        userManagement: {
            signUp: {
                email: "",
                password: ""
            }
        }
    },
    view: MainView,
    node: document.body,
});
