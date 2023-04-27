import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

export const ROOT = "/";
export const LOGIN = "/login";
export const REGISTER = "/register";

const router = createBrowserRouter([
  {
    path: ROOT,
    element: "root",
  },
  {
    path: LOGIN,
    element: <Login />,
  },
  {
    path: REGISTER,
    element: <Register />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
