import { Link } from "react-router-dom";
import { useLogin } from "../../../context/login";

export default function LoginBar() {
  const { userNickname, logout } = useLogin();
  console.log(userNickname);

  return (
    <div>
      {userNickname && <button onClick={() => logout()}>Logout</button>}

      {!userNickname && (
        <Link to="/login">
          <button>Login</button>
        </Link>
      )}
    </div>
  );
}
