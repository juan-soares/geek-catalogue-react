import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../shared/context/login";

import Header from "../../shared/components/Header";
import Footer from "../../shared/components/Footer";

export default function LoginPage() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const { setActiveUser } = useContext(LoginContext);

  const redirect = useNavigate();

  function handleChange(e) {
    setCredentials({
      ...credentials,
      [e.target.id]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await fetch(`${process.env.REACT_APP_API}/user`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    const searchedUser = await res.json();

    if (searchedUser.data === "") {
      window.alert(searchedUser.message);
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
          Usuário:{" "}
        </label>
        <input
          id="password"
          type="password"
          placeholder="Senha"
          value={credentials.password}
          onChange={(e) => handleChange(e)}
          required
        />

        <button>Log in</button>
      </form>
      <Footer />
    </div>
  );
}
