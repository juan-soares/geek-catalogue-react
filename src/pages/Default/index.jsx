//ok-Deve estar presente em todas as páginas.
//ok-Deve exibir um cabeçalho.
//ok-Deve exibir e englobar o conteúdo das outras páginas.
//ok-Deve conter um footer.

import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function DefaultPage() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
