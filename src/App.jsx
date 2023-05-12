import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Dashboard from "./components/dashboard/Dashboard";
import Comments from "./components/comments/Comments";
import Profile from "./components/profile/Profile";
import Users from "./components/users/Users";
import Home from "./components/home/Home";
import Layout from "./components/layout/Layout";
import NotFound from "./components/error/NotFound";
import ErrorBoundary from "./components/error/ErrorBoundary";

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
    element: (
      <ErrorBoundary>
        <Home />,
      </ErrorBoundary>
    ),
  },
  {
    path: LOGIN,
    element: (
      <ErrorBoundary>
        <Login />
      </ErrorBoundary>
    ),
  },
  {
    path: REGISTER,
    element: (
      <ErrorBoundary>
        <Register />
      </ErrorBoundary>
    ),
  },
  {
    path: PROTECTED,
    element: (
      <ErrorBoundary>
        <Layout />
      </ErrorBoundary>
    ),
    children: [
      {
        path: DASHBOARD,
        element: (
          <ErrorBoundary>
            <Dashboard />
          </ErrorBoundary>
        ),
      },
      {
        path: USERS,
        element: (
          <ErrorBoundary>
            <Users />
          </ErrorBoundary>
        ),
      },
      {
        path: PROFILE,
        element: (
          <ErrorBoundary>
            <Profile />
          </ErrorBoundary>
        ),
      },
      {
        path: COMMENTS,
        element: (
          <ErrorBoundary>
            <Comments />
          </ErrorBoundary>
        ),
      },
    ],
  },
  {
    path: "*",
    element: (
      <ErrorBoundary>
        <NotFound />
      </ErrorBoundary>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
