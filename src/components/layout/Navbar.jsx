import { Fragment, useState } from "react";
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
  textDecoration,
} from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import chitchatLogo from "../../assets/chitchatIcon.svg";
import { Link as RouterLink } from "react-router-dom";
import { ROOT } from "../../App";

function NavReloaded({ navlinks }) {
  const [isOpen, setIsOpen] = useState(false);

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
          {navlinks.map((navlink, index) => (
            <Fragment key={navlink.title}>
              {index === navlinks.length - 1 ? (
                <Button
                  as={RouterLink}
                  to={navlink.route}
                  colorScheme="teal"
                  onClick={toggleDrawer}
                >
                  {navlink.title}
                </Button>
              ) : (
                <Link
                  key={navlink.title}
                  as={RouterLink}
                  color="teal"
                  to={navlink.route}
                  fontWeight="bold"
                  _hover={{ textDecoration: "none" }}
                >
                  {navlink.title}
                </Link>
              )}
            </Fragment>
          ))}
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
              {navlinks.map((navlink) => (
                <Link
                  key={navlink.route}
                  onClick={toggleDrawer}
                  as={RouterLink}
                  color="teal"
                  to={navlink.route}
                  _hover={{ textDecoration: "none" }}
                >
                  {navlink.title}
                </Link>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}

export default NavReloaded;
