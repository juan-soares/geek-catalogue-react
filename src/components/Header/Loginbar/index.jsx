//ok-Deve conter um botão de login, caso o usuário esteja deslogado, que redirecione para a página de login.
//ok-Deve conter uma imagem de avatar, caso o usuário esteja logado.
//ok-Deve conter o nickname do usuário, caso esteja logado.
//ok-Deve conter um botão de logout, caso o usuário esteja logado, que encerre a seção do usuário.

import { useContext } from "react";
import { ContextUser } from "../../../utils/context/user";
import { Link } from "react-router-dom";

export default function HeaderLoginbar() {
  const { user, logoutUser } = useContext(ContextUser);

  return (
    <div>
      {!user && (
        <Link to="/login">
          <button>Login</button>
        </Link>
      )}
      {user && (
        <div>
          <label>{user.nickname}</label>
          <img src={user.avatar} alt="avatar" />
          <button onClick={logoutUser}>Logout</button>
        </div>
      )}
    </div>
  );
}
