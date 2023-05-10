import { useState } from "react";
import {
  Flex,
  Box,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Image,
  Link,
  VStack,
  HStack,
  Button,
} from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import chitchatLogo from "../../assets/chitchatIcon.svg";
import { Link as RouterLink } from "react-router-dom";
import { PROTECTED, ROOT } from "../../App";
import { useAuth, useLogout } from "../../hooks/auth";

function ProtectedNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { logout, isLoading } = useLogout();
  const { user } = useAuth();

  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <Flex
      bg="white"
      w="100%"
      px={4}
      py={3}
      justifyContent="space-between"
      alignItems="center"
      borderTop="6px solid"
      borderTopColor="teal.400"
      pos="fixed"
      width="full"
      zIndex="3"
      boxShadow="md"
      borderBottom="1px solid"
      borderBottomColor="teal.400"
    >
      <Box>
        <Link
          display="flex"
          gap={1}
          color="teal"
          as={RouterLink}
          to={ROOT}
          fontWeight="bold"
          _hover={{ textDecoration: "none" }}
        >
          <Image src={chitchatLogo} w={6} />
          ChitChat
        </Link>
      </Box>
      <Box display={{ base: "none", md: "block" }}>
        <HStack ml="auto" gap={5}>
          <Link
            as={RouterLink}
            display="flex"
            color="teal"
            to={`${PROTECTED}/Dashboard`}
            textDecor="none"
            fontWeight="bold"
            _hover={{ textDecoration: "none" }}
          >
            Timeline
          </Link>
          <Link
            as={RouterLink}
            display="flex"
            color="teal"
            to={`${PROTECTED}/Profile/${user?.id}`}
            textDecor="none"
            fontWeight="bold"
            _hover={{ textDecoration: "none" }}
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
        </HStack>
      </Box>
      <Box display={{ base: "block", md: "none" }}>
        <IconButton
          aria-label="Open menu"
          size="md"
          fontSize="lg"
          variant="ghost"
          icon={<FaBars />}
          onClick={toggleDrawer}
          color="teal"
        />
      </Box>
      <Drawer placement="right" onClose={toggleDrawer} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color="teal" />
          <DrawerHeader color="teal">Menu</DrawerHeader>
          <DrawerBody>
            <VStack ml="auto" gap={5}>
              <Link
                as={RouterLink}
                display="flex"
                color="teal"
                to={`${PROTECTED}/Dashboard`}
                onClick={toggleDrawer}
                _hover={{ textDecoration: "none" }}
              >
                Timeline
              </Link>
              <Link
                as={RouterLink}
                display="flex"
                color="teal"
                to={`${PROTECTED}/Profile/${user?.id}`}
                onClick={toggleDrawer}
                _hover={{ textDecoration: "none" }}
              >
                Profile
              </Link>
              <Link
                ml="auto"
                color="teal"
                onClick={logout}
                isLoading={isLoading}
                _hover={{ textDecoration: "none" }}
              >
                Logout
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}

export default ProtectedNavbar;
