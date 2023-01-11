import { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../../../context/login";

export default function LoginBar() {
  const { searchedUser, setSearchedUser } = useContext(LoginContext);

  return (
    <div>
      {searchedUser && <button onClick={() => logout()}>Logout</button>}

      {!searchedUser && (
        <Link to="/login">
          <button>Login</button>
        </Link>
      )}
    </div>
  );
}
