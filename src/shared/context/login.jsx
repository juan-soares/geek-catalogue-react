import { createContext, useState } from "react";

export const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {
  const [activeUser, setActiveUser] = useState({ message: "", data: "" });

  return (
    <LoginContext.Provider value={{ activeUser, setActiveUser }}>
      {children}
    </LoginContext.Provider>
  );
};
