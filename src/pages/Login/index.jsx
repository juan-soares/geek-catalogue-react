import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContextUser } from "../../utils/context/user";

export default function LoginPage() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const { login } = useContext(ContextUser);
  const navigate = useNavigate();

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          let confirm = window.confirm("Deseja prosseguir?");
          if (!confirm) return;
          window.alert(await login(credentials));
          setCredentials({ email: "", password: "" });
          navigate("/");
        }}
      >
        <label htmlFor="email">Usuário:</label>
        <input
          type="email"
          id="email"
          required
          value={credentials.email}
          onChange={(e) =>
            setCredentials({ ...credentials, email: e.target.value })
          }
        />
        <label htmlFor="password">Senha: </label>
        <input
          type="text"
          id="password"
          required
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />

        <button>Ir</button>
      </form>
    </div>
  );
}
