import { Link } from "react-router-dom";
import GlobalSearchBar from "./GlobalSearchBar";
import LoginBar from "./LoginBar";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <img src="?" alt="logo" />
      </Link>
      <GlobalSearchBar />
      <LoginBar />
      <NavBar />
    </header>
  );
}
