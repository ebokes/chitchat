import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { LOGIN } from "../../App";
import { useAuth } from "../../hooks/auth";
import Navbar from "./Navbar";

const Layout = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { user, isLoading } = useAuth();

  useEffect(() => {
    if (pathname.startsWith("/protected") && !user) {
      navigate(LOGIN);
    }
  }, [pathname, user]);

  if (isLoading) return "loading...";

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
