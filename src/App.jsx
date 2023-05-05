import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Dashboard from "./components/dashboard/Dashboard";
import Comments from "./components/comments";
import Profile from "./components/profile/Profile";
import Users from "./components/users/Users";
import Home from "./components/home/Home";
import AppOutlet from "./components/layout/AppOutlet";

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
    element: <Home />,
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
    element: <AppOutlet />,
    children: [
      {
        path: DASHBOARD,
        element: <Dashboard />,
      },
      {
        path: USERS,
        element: <Users />,
      },
      {
        path: PROFILE,
        element: <Profile />,
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
