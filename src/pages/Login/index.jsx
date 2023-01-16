import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../utils/hooks/useForm";
import { LoginContext } from "../../utils/context/login";

export default function LoginPage() {
  /* const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const { activeUser, setActiveUser } = useContext(LoginContext);

  const redirect = useNavigate();

  function handleChange(e) {
    setCredentials({
      ...credentials,
      [e.target.id]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setActiveUser({ ...activeUser, data: null });

    const { postUserLogin } = useUserServices();

    const searchedUser = await postUserLogin(credentials);

    if (searchedUser.data === "") {
      window.alert(searchedUser.message);
      setActiveUser({ ...activeUser, data: "" });
      setCredentials({ email: "", password: "" });
    } else {
      setActiveUser(searchedUser);
      window.alert(searchedUser.data + " logado com sucesso!");
      redirect("/");
    }
  } */

  const [credentials, setCredentials] = useState({});
  const { handleChange } = useForm();
  const { activeUser, setActiveUser } = useContext(LoginContext);
  const redirect = useNavigate();

  return (
    <div>
      Login Page
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          setActiveUser({ nickname: "" });

          const res = await fetch(`${process.env.REACT_APP_API}/user`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(credentials),
          });
          const { message, data } = await res.json();
          if (data !== "") {
            setActiveUser({ nickname: data });
            redirect("/");
          } else {
            setCredentials({});
            setActiveUser({});
          }
          window.alert(message);
        }}
      >
        <label htmlFor="email">Usuário: </label>
        <input
          type="email"
          id="email"
          placeholder="E-mail"
          value={credentials.email ? credentials.email : ""}
          onChange={(e) => handleChange(e, credentials, setCredentials)}
          required
        />
        <label htmlFor="password">Senha: </label>
        <input
          type="password"
          id="password"
          value={credentials.password ? credentials.password : ""}
          onChange={(e) => handleChange(e, credentials, setCredentials)}
          required
        />
        <button>{activeUser?.nickname === "" ? "Loading" : "OK"}</button>
      </form>
    </div>
  );
}
