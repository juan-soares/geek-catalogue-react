import { useContext } from "react";
import { LoginContext } from "../../../context/login";
import { Link } from "react-router-dom";

export default function HeaderLoginBar() {
  const { activeUser, setActiveUser } = useContext(LoginContext);

  function logOut() {
    const confirm = window.confirm("Deseja realmente sair?");

    if (confirm) {
      setActiveUser({ message: "", data: "" });
      window.alert("Log out realizado!");
    }
  }

  return (
    <div>
      {(activeUser.data === "" || activeUser.data === null) && (
        <Link to="/login">
          <button>Login</button>
        </Link>
      )}
      {activeUser.data !== "" && activeUser.data !== null && (
        <div>
          <Link to="/admin">{activeUser.data}</Link>
          <Link to="/">
            <button onClick={logOut}>Logout</button>
          </Link>
        </div>
      )}
    </div>
  );
}
