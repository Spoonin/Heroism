import { h, View } from "https://unpkg.com/hyperapp";

interface State {
    value: string;
}

export const MainView: View<State> = (state) =>
    <ul>
        <li>Hello world from view!<span>{state.value}</span></li>
        <li>Hello world from view2!</li>
        <button onClick={(state: State) => ({ ...state, value: state.value + "3" })}>Change</button>
    </ul >;
