import { createContext, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {
  const [userNickname, setUserNickname] = useState(null);
  const navigate = useNavigate();

  // call this function when you want to authenticate the userNickname
  const login = async (credentials) => {
    const userNickname = await fetch(`${process.env.REACT_APP_API}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials)
    });
    setUserNickname(userNickname);
    navigate("/");
  };

  // call this function to sign out logged in userNickname
  const logout = () => {
    setUserNickname(null);
    navigate("/", { replace: true });
  };

  const loginContextValues = useMemo(
    () => ({
      userNickname,
      login,
      logout
    }),
    [userNickname]
  );

  return (
    <LoginContext.Provider value={loginContextValues}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => {
  return useContext(LoginContext);
};
