import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/login/Login";
import "./styles/global.scss";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App
