import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { LOGIN } from "../../App";
import { useAuth } from "../../hooks/auth";
import Sidebar from "./Sidebar";
import { Box, Flex } from "@chakra-ui/react";
import ProtectedNavbar from "./ProtectedNavbar";
import Spinner from "./Spinner";

const Layout = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { user, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && pathname.startsWith("/protected") && !user) {
      navigate(LOGIN);
    }
  }, [pathname, user, isLoading]);

  if (isLoading) return <Spinner />;

  return (
    <>
      <ProtectedNavbar />
      <Flex pt="16" pb="12" mx="auto" w="full" maxW="1200px">
        <Box w="900px">
          <Outlet />
        </Box>
        <Sidebar />
      </Flex>
    </>
  );
};

export default Layout;
