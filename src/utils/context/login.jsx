import { createContext, useState } from "react";
import useForm from "../hooks/useForm";

export const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {
  const [activeUser, setActiveUser] = useState({});
  const { handleSubmit } = useForm();

  async function userLogin(e, credentials, setCredentials, url) {
    await handleSubmit(e, credentials, setActiveUser, url);

    setCredentials({});

    console.log(activeUser);
  }

  return (
    <LoginContext.Provider value={{ activeUser, setActiveUser, userLogin }}>
      {children}
    </LoginContext.Provider>
  );
};
