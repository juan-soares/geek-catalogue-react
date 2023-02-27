import { createContext, useState } from "react";
export const ContextUser = createContext();

export default function ContextUserProvider({ children }) {
  const [user, setUser] = useState(
    sessionStorage.getItem("nickname")
      ? JSON.parse(sessionStorage.getItem("nickname"))
      : { nickname: "" }
  );

  async function login(credentials) {
    const res = await fetch(`${process.env.REACT_APP_API}/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    const { data, message } = await res.json();
    if (data.nickname !== "") {
      sessionStorage.setItem("nickname", JSON.stringify(data.nickname));
      setUser(JSON.parse(sessionStorage.getItem("nickname")));
    }
    return message;
  }

  function logout() {
    let confirm = window.confirm("Deseja sair?");
    if (!confirm) return;
    sessionStorage.clear();
    setUser({ nickname: "" });
  }

  return (
    <ContextUser.Provider value={{ user, login, logout }}>
      {children}
    </ContextUser.Provider>
  );
}
