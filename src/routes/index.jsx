import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";
import { LoginContextProvider } from "../shared/context/login";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <LoginContextProvider>
        <HomePage />
      </LoginContextProvider>
    )
  },
  {
    path: "/login",
    element: (
      <LoginContextProvider>
        <LoginPage />
      </LoginContextProvider>
    )
  }
]);

export default routes;
