import { useEffect } from "react";
import { createBrowserRouter } from "react-router-dom";
import CategoryPage from "../pages/Category";
import DefaultLayoutPage from "../pages/DefaultLayout";
import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayoutPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/:categoryUrl", element: <CategoryPage /> },
    ],
  },
]);

export default routes;
