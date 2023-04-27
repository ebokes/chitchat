import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { LOGIN } from "../../App";

const Layout = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname.startsWith("/protected")) {
      navigate(LOGIN);
    }
  }, [pathname]);
  return (
    <>
      <Outlet />
    </>
  );
};

export default Layout;
