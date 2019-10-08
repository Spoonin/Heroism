import { h, View } from "hyperapp";

interface SignUpProps {
    email: string;
    password: string;
    onSubmit: () => void;
}

const onFakeSubmit = (e: Event) => {
    e.preventDefault();
    return false;
};

export const SignUpForm: View<SignUpProps> = ({
    email,
    password,
    onSubmit
}) =>
    <form onSubmit={onFakeSubmit} id="signin_form">
        <input type="email" required value={email} />
        <input type="password" required value={password} />
        <button onClick={() => {
            const form = document.querySelector<HTMLFormElement>("#signin_form")!;
            if (form.checkValidity()) {
                onSubmit();
            }
        }}>Ok</button>
    </form>;
