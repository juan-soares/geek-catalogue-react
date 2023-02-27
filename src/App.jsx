import ContextUserProvider from "./utils/context/user";

import { RouterProvider } from "react-router-dom";
import routes from "./routes";

export default function App() {
  return (
    <>
      <ContextUserProvider>
        <RouterProvider router={routes} />
      </ContextUserProvider>
    </>
  );
}
