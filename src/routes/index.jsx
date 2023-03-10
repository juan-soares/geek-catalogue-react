//Deve gerenciar as rotas e as páginas a serem acessadas por elas.

import { createBrowserRouter } from "react-router-dom";
import DefaultPage from "../pages/Default";

import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <DefaultPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);
