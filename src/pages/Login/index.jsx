import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../shared/components/Header";
import Footer from "../../shared/components/Footer";
import { useLogin } from "../../shared/context/login";

export default function LoginPage() {
  const { login } = useLogin();
  const redirect = useNavigate();

  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  function handleChange(e) {
    setCredentials({
      ...credentials,
      [e.target.id]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    login();
    setCredentials({
      email: "",
      password: ""
    });

    window.alert("Salvo!");
    redirect("/");
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
