import { useContext } from "react";
import { LoginContext } from "../../../../utils/context/login";
import { Link, useNavigate } from "react-router-dom";

export default function HeaderLoginBar() {
  const { activeUser, userLogout } = useContext(LoginContext);
  const redirect = useNavigate();

  return (
    <div>
      {!activeUser.nickname && (
        <Link to="/login">
          <button>Login</button>
        </Link>
      )}
      {activeUser.nickname && (
        <div>
          <img
            src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
            alt="user icon"
            width="50"
            heigth="50"
          />
          <Link to="/admin">{activeUser.nickname}</Link>
          <button
            onClick={() => {
              userLogout();
              redirect("/");
            }}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
