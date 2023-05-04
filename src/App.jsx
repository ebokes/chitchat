import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Dashboard from "./components/dashboard/Dashboard";
import Layout from "./components/layout";
import Comments from "./components/comments";

export const ROOT = "/";
export const LOGIN = "/login";
export const REGISTER = "/register";

export const PROTECTED = "/protected";
export const DASHBOARD = "/protected/dashboard";

export const USERS = "/protected/user";
export const PROFILE = "/protected/profile/:id";
export const COMMENTS = "/protected/comments/:id";

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
      {
        path: PROFILE,
        element: "User profile for a specific ID",
      },
      {
        path: COMMENTS,
        element: <Comments />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
