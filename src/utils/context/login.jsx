import { createContext, useState } from "react";
import useForm from "../hooks/useForm";

export const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {
  const [activeUser, setActiveUser] = useState({ nickname: "" });
  const { handleSubmit } = useForm();

  async function userLogin(e, credentials) {
    setActiveUser({ nickname: "loading" });
    await handleSubmit(e, "POST", "user", credentials, setActiveUser);
  }

  function userLogout() {
    const confirm = window.confirm("Deseja sair?");

    if (!confirm) null;

    setActiveUser({ nickname: "" });

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
