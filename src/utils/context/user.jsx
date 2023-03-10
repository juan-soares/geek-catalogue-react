//ok-Deve fazer o login: validar os dados enviados do formulário com o servidor e preservar as informações do usuário, caso seja identificado.
//ok-Deve fazer o logout: limpar os dados do usuário da seção.

import { createContext, useState } from "react";
import useForm from "../hooks/useForm";

export const ContextUser = createContext();

export default function ContextUserProvider({ children }) {
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("user")));
  const { handleSubmit } = useForm();

  async function loginUser(e, credentials, setIsLoading, setCredentials) {
    setIsLoading(true);

    function setUserSessionStorage(data) {
      sessionStorage.setItem("user", JSON.stringify(data));
    }

    await handleSubmit(
      e,
      "POST",
      "/user",
      credentials,
      setCredentials,
      setUserSessionStorage
    );
    setUser(JSON.parse(sessionStorage.getItem("user")));
    setIsLoading(false);
  }

  function logoutUser() {
    const confirm = window.confirm("Deseja sair?");
    if (!confirm) return;
    sessionStorage.clear();
    setUser(null);
  }

  return (
    <ContextUser.Provider value={{ user, setUser, loginUser, logoutUser }}>
      {console.log(user)}
      {children}
    </ContextUser.Provider>
  );
}
