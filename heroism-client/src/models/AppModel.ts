export type PageName = "SignUp" | "SignIn" | "Games" | "Game";

export interface AppModel {
    currentPage: PageName;
    userManagement: {
        signUp: {
            email: string;
            password: string;
        }
    };
}
