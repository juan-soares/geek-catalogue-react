import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ContextUser } from "../../../../utils/context/user";

export default function LoginBar() {
  const { user, logout } = useContext(ContextUser);
  const navigate = useNavigate();

  return (
    <div>
      {user.nickname === "" && (
        <Link to="/login">
          <button>Login</button>
        </Link>
      )}

      {user.nickname !== "" && (
        <>
          <img src="?" alt="avatar" />
          <label>{user.nickname}</label>
          <button
            onClick={() => {
              logout();
              navigate("/");
            }}
          >
            Logout
          </button>
        </>
      )}
    </div>
  );
}
