//Deve ficar fixo no topo da página,
//ok-Deve conter uma imagem com o logo, que ao clicar, redirecione para a página Home.
//ok-Deve conter uma barra de pesquisa,
//ok-Deve conter uma barra de login.

import { Link } from "react-router-dom";
import HeaderSearchbar from "./Searchbar";
import HeaderLoginbar from "./Loginbar";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <img src="?" alt="logo" />
      </Link>
      <HeaderSearchbar />
      <HeaderLoginbar />
    </header>
  );
}
