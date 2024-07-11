import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../stores/userManager";
import sdk from "../graphql/sdk";

function parseFormdata(data: EventTarget & HTMLFormElement) {
  const formData = new FormData(data);
  const values = Object.fromEntries(formData.entries());
  const res = {
    mail: values.mail as string,
    password: values.password as string,
  };
  return res;
}

export default function Login() {
  const navigate = useNavigate();
  const recordUser = useUserStore((state) => state.login);

  const hLogin = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const input = parseFormdata(evt.currentTarget);
    const response = (
      await sdk.Login({
        data: input,
      })
    ).login;
    recordUser(JSON.parse(response));
    return navigate("/");
  };

  const hSignup = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const input = parseFormdata(evt.currentTarget);
    const response = (
      await sdk.Signup({
        data: input,
      })
    ).signup;
    recordUser(JSON.parse(response));
    return navigate("/");
  };

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={hLogin}>
        <input type="text" name="mail" placeholder="mail" />
        <input type="password" name="password" placeholder="password" />
        <button>Submit</button>
      </form>

      <h2>Signup</h2>
      <form onSubmit={hSignup}>
        <input type="text" name="mail" placeholder="mail" />
        <input type="password" name="password" placeholder="password" />
        <button>Submit</button>
      </form>

      <h2>Profile</h2>
      <p>Todo</p>
    </>
  );
}
