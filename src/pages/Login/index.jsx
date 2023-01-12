import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../shared/context/login";
import useUserServices from "../../shared/services/user";

import Header from "../../shared/components/Header";
import Footer from "../../shared/components/Footer";

export default function LoginPage() {
  const [credentials, setCredentials] = useState({
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
  }

  return (
    <div>
      <Header />
      Login Page
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="email">Usuário: </label>
        <input
          id="email"
          type="email"
          placeholder="E-mail"
          value={credentials.email}
          onChange={(e) => handleChange(e)}
          required
        />
        <label htmlFor="password" required>
          Senha:{" "}
        </label>
        <input
          id="password"
          type="password"
          placeholder="Senha"
          value={credentials.password}
          onChange={(e) => handleChange(e)}
          required
        />

        <button>
          {activeUser.data === "" && "Log in"}
          {activeUser.data === null && "Loading"}
        </button>
      </form>
      <Footer />
    </div>
  );
}
