import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Dashboard from "./components/dashboard";
import Layout from "./components/layout";

export const ROOT = "/";
export const LOGIN = "/login";
export const REGISTER = "/register";

export const PROTECTED = "/protected";
export const DASHBOARD = "/protected/dashboard";

export const USERS = "/protected/user";

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
  {
    path: PROTECTED,
    element: <Layout />,
    children: [
      {
        path: DASHBOARD,
        element: <Dashboard />,
      },
      {
        path: USERS,
        element: "USERS",
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
