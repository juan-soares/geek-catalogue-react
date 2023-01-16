import { createBrowserRouter } from "react-router-dom";
import DefaultLayoutPage from "../pages/DefaultLayout";
import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";
import AdminPage from "../pages/Admin";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayoutPage />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/admin", element: <AdminPage /> },
    ],
  },
]);

export default routes;
