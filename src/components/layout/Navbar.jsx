import { Button, Flex, HStack, Image, Link } from "@chakra-ui/react";
import { NavLink as RouterLink } from "react-router-dom";
import { LOGIN, PROTECTED, REGISTER, ROOT } from "../../App";
import chichatIcon from "../../assets/chitchatIcon.svg";
import { useAuth } from "../../hooks/auth";
import { useLogout } from "../../hooks/auth";

export default function Navbar() {
  const { logout, isLoading } = useLogout();
  const { user } = useAuth();

  return (
    <Flex
      shadow="sm"
      pos="fixed"
      width="full"
      borderTop="6px solid"
      borderTopColor="teal.400"
      height="16"
      zIndex="3"
      justify="center"
      bg="white"
    >
      <Flex px="4" w="full" align="center" maxW="1200px">
        <Link
          display="flex"
          gap={1}
          color="teal"
          as={RouterLink}
          to={ROOT}
          fontWeight="bold"
        >
          <Image src={chichatIcon} w={6} />
          ChitChat
        </Link>
        <HStack ml="auto" gap={5}>
          {user && (
            <>
              <Link
                as={RouterLink}
                display="flex"
                color="teal"
                to={`${PROTECTED}/Dashboard`}
                fontWeight="bold"
                activeClassName="active"
                sx={{
                  "&.active-link": {
                    bg: "blue.500",
                    color: "white",
                    fontWeight: "bold",
                    border: "2px solid",
                    borderColor: "blue.500",
                    borderRadius: "md",
                    p: 2,
                  },
                }}
              >
                Timeline
              </Link>
              <Link
                as={RouterLink}
                display="flex"
                color="teal"
                to={`${PROTECTED}/Profile/${user.id}`}
                fontWeight="bold"
                // activeClassName="active"
              >
                Profile
              </Link>
              <Button
                ml="auto"
                colorScheme="teal"
                size="sm"
                onClick={logout}
                isLoading={isLoading}
              >
                Logout
              </Button>
            </>
          )}
          {!user && (
            <>
              <Link
                as={RouterLink}
                display="flex"
                color="teal"
                to={ROOT}
                fontWeight="bold"
              >
                Home
              </Link>
              <Link
                as={RouterLink}
                to={LOGIN}
                fontWeight="medium"
                fontSize="sm"
                ml="auto"
                color="teal"
                _hover={{ color: "teal.600" }}
              >
                Login
              </Link>
              <Button
                as={RouterLink}
                to={REGISTER}
                colorScheme="teal"
                size="sm"
                ml={2}
              >
                Sign up
              </Button>
            </>
          )}
        </HStack>
      </Flex>
    </Flex>
  );
}
