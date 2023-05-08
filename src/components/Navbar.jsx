import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Spacer,
  useDisclosure,
  Container,
  Show,
  Hide,
  Box,
  Icon,
  HStack,
} from "@chakra-ui/react";
// import { MdShoppingCart } from "react-icons/md";
// import { BsFillHeartFill } from "react-icons/bs";
// import CartSlider from "../components/CartSlider";

const Navbar = ({ logo, navlinks }) => {
  const [size, setSize] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = () => {
    setSize();
    onOpen();
  };
  return (
    <Box boxShadow="lg" maxW="100%" bg="white">
      <Container maxW="1200px">
        <Flex as="nav" alignItems="center" maxW="1200px" mx="auto" px="0">
          <Heading as="h3" fontSize={22}>
            {logo}
          </Heading>
          <Spacer />
          <Hide above="md">
            <Button onClick={() => handleClick()} my={1}>
              <HamburgerIcon boxSize={6} />
            </Button>
          </Hide>
          <Show above="md">
            <Flex as="nav" alignItems="center" gap="20px" py="10px">
              <HStack gap="20px" alignItems="center">
                {/* {navlinks.map((navlink) => {
                  <NavLink to={navlink.link}>{navlink.title}</NavLink>;
                })} */}
                {/* <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink> */}
              </HStack>
              <HStack gap="10px">
                {/* <Icon as={BsFillHeartFill} /> */}
                {/* <CartSlider
                  label={
                    <HStack alignItems="center" gap="5px">
                      <Icon as={MdShoppingCart} />
                      <Heading as="h4" fontSize="16px" fontFamily="DM Sans">
                        $00.0
                      </Heading>
                    </HStack>
                  }
                ></CartSlider> */}
              </HStack>
            </Flex>
          </Show>

          <Drawer onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>{`Menu`}</DrawerHeader>
              <DrawerBody>
                <Flex
                  as="nav"
                  alignItems="center"
                  p="10px"
                  flexDirection="column"
                >
                  <Flex gap="20px" flexDirection="column">
                    <HStack gap="20px" flexDirection="column">
                      <NavLink to="/">Home</NavLink>
                      <NavLink to="/shop">Shop</NavLink>
                      <NavLink to="/about">About</NavLink>
                      <NavLink to="/contact">Contact</NavLink>
                    </HStack>
                    <HStack gap="20px" flexDirection="column">
                      <NavLink to="/cart">
                        <HStack alignItems="center">
                          <Heading as="h4" fontSize="16px" fontFamily="DM Sans">
                            $00.0
                          </Heading>
                          {/* <Icon as={MdShoppingCart} /> */}
                        </HStack>
                      </NavLink>
                      {/* <NavLink to="/profile">
                        <Icon as={MdPerson} mt="5px" boxSize="18px" />
                      </NavLink> */}
                    </HStack>
                  </Flex>
                </Flex>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
