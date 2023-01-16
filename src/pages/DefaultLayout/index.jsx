import Header from "../../components/shared/Header";
import Footer from "../../components/shared/Footer";
import { Outlet } from "react-router-dom";

export default function DefaultLayoutPage() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
