import { h, View } from "hyperapp";
import { AppModel } from "src/models/AppModel";
import { Router } from "./Router";

export const MainView: View<AppModel> = (state) => <Router state={state} />;
