import { Link } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../../context/login";
import HeaderGlobalSearch from "./GlobalSearch";
import HeaderLoginBar from "./LoginBar";
import HeaderNavbar from "./Navbar";

export default function Header() {
 

  return (
    <header>
      <Link to="/">
        <img
          src="https://png.pngtree.com/element_our/png_detail/20181008/s-logo-template-isolated-on-black-background-png_130991.jpg"
          alt=""
          width="50"
          height="50"
        />
      </Link>
      <HeaderGlobalSearch />
      <HeaderLoginBar />
      <HeaderNavbar />
    </header>
  );
}
