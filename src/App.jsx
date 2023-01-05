import { RouterProvider } from "react-router-dom";
import routes from "./routes/index";

export default function App() {
  return <RouterProvider router={routes} />;
}
