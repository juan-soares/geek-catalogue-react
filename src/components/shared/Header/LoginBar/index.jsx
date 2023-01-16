import { useContext } from "react";
import { LoginContext } from "../../../../utils/context/login";
import { Link } from "react-router-dom";

export default function HeaderLoginBar() {
  const { activeUser, setActiveUser } = useContext(LoginContext);

  function logOut() {
    const confirm = window.confirm("Deseja realmente sair?");

    if (confirm) {
      setActiveUser({});
      window.alert("Log out realizado!");
    }
  }

  return (
    <div>
      {!activeUser.nickname && (
        <Link to="/login">
          <button>Login</button>
        </Link>
      )}
      {activeUser.nickname && <button>Logout</button>}
    </div>
  );
}
