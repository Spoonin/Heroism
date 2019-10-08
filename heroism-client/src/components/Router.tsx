import { h } from "hyperapp";
import { AppModel } from "../models/AppModel";
import { SignUpForm } from "./userManagement/SignUpForm";
import { Auth } from "aws-amplify";

interface RouterProps {
    state: AppModel;
}

export const Router = ({ state }: RouterProps) => {
    switch (state.currentPage) {
        case "SignUp":
            const { email, password } = state.userManagement.signUp;
            return <SignUpForm
                email={email}
                password={password}
                onSubmit={async () => {
                    await Auth.signUp({ username: email, password });
                }} />;
    }
};
