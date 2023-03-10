//ok-Deve conter um formulário, com campos para o preenchimento obrigatório de email e sennha.
//ok-Deve emitir uma mensagem de alerta de confirmação ou erro de acordo com a resposta do servidor, ao ser submetido.
//ok-Deve bloquear o botao de login, enquanto espera uma respota.
//ok-Deve limpar os campos, ao ser submetido.
//ok-Deve direcionar para a home page, se o login for efetuado com sucesso.
//ok-Nao deve ser acessada se o usuário estiver logado.

import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { ContextUser } from "../../utils/context/user";
import useForm from "../../utils/hooks/useForm";

export default function LoginPage() {
  const [credentials, setCredentials] = useState({});
  const { user, loginUser } = useContext(ContextUser);
  const { handleChange } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  if (!user) {
    return (
      <div>
        <form
          onSubmit={async (e) => {
            await loginUser(e, credentials, setIsLoading, setCredentials);
          }}
        >
          <label>Email: </label>
          <input
            type="email"
            id="email"
            value={credentials.email ? credentials.email : ""}
            onChange={(e) => handleChange(e, credentials, setCredentials)}
            required
          />
          <label>Senha: </label>
          <input
            type="password"
            id="password"
            value={credentials.password ? credentials.password : ""}
            onChange={(e) => handleChange(e, credentials, setCredentials)}
            required
          />
          <button disabled={isLoading}>
            {isLoading ? "Loading.." : "Login"}
          </button>
        </form>
      </div>
    );
  } else {
    return <Navigate replace to="/" />;
  }
}
