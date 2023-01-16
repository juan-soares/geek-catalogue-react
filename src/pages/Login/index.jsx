import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../utils/hooks/useForm";
import { LoginContext } from "../../utils/context/login";

export default function LoginPage() {
  const [credentials, setCredentials] = useState({});
  const { handleChange } = useForm();
  const { activeUser, userLogin } = useContext(LoginContext);
  const redirect = useNavigate();

  return (
    <div>
      Login Page
      <form
        onSubmit={async (e) => {
          await userLogin(e, credentials);
          setCredentials({});
          if (activeUser !== "") redirect("/");
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
