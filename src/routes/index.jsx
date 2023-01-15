import { createBrowserRouter } from "react-router-dom";
import { LoginContextProvider } from "../shared/context/login";
import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";
import AdminPage from "../pages/Admin";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <LoginContextProvider>
        <HomePage />
      </LoginContextProvider>
    ),
  },
  {
    path: "/login",
    element: (
      <LoginContextProvider>
        <LoginPage />
      </LoginContextProvider>
    ),
  },
  {
    path: "/admin",
    element: (
      <LoginContextProvider>
        <AdminPage />
      </LoginContextProvider>
    ),
  },
]);

export default routes;
