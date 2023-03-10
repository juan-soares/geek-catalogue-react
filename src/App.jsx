//Deve centralizar e renderizar a aplicação.
//Deve conter os Context-Providers, para serem consumidos pelos componentes filhos.
//Deve conter o gerenciador de rotas.

import { RouterProvider } from "react-router-dom";
import ContextUserProvider from "./utils/context/user";
import { routes } from "./routes";

export default function App() {
  return (
    <>
      <ContextUserProvider>
        <RouterProvider router={routes} />
      </ContextUserProvider>
    </>
  );
}
