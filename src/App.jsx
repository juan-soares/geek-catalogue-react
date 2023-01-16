import { RouterProvider } from "react-router-dom";
import { LoginContextProvider } from "./utils/context/login";
import routes from "./routes";

export default function App() {
  return (
    <>
      <LoginContextProvider>
        <RouterProvider router={routes} />
      </LoginContextProvider>
    </>
  );
}
