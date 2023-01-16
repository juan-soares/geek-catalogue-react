import { createContext, useState } from "react";
import useForm from "../hooks/useForm";

export const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {
  const [activeUser, setActiveUser] = useState({});
  const { handleSubmit } = useForm();

  async function userLogin(e, credentials) {
    await handleSubmit(e, credentials, setActiveUser, "user");
  }

  function userLogout() {
    const confirm = window.confirm("Deseja sair?");

    if (!confirm) null;

    setActiveUser({});

    window.alert("Logout realizado!");
  }

  return (
    <LoginContext.Provider
      value={{ activeUser, setActiveUser, userLogin, userLogout }}
    >
      {children}
    </LoginContext.Provider>
  );
};
