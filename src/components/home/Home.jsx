import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Heading,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import chitchatLogo from "../../assets/chitchatIcon.svg";
import { Link as RouterLink } from "react-router-dom";
import { LOGIN, REGISTER, ROOT } from "../../App";
import lady from "../../assets/lady2.jpg";

const HomeNav = () => {
  return (
    <VStack
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
          <Image src={chitchatLogo} w={6} />
          ChitChat
        </Link>
        <HStack ml="auto" gap={5}>
          <Link as={RouterLink} color="teal" to={ROOT} fontWeight="bold">
            Home
          </Link>
          <Link as={RouterLink} to={LOGIN} fontWeight="medium" color="teal">
            Login
          </Link>
          <Button as={RouterLink} to={REGISTER} colorScheme="teal">
            Sign up
          </Button>
        </HStack>
      </Flex>
    </VStack>
  );
};

const Home = () => {
  return (
    <Box bgGradient="linear(to-br, teal.500 40%, teal.300)">
      <HomeNav />
      <Flex
        py="20"
        h="100vh"
        align="center"
        maxW="1200px"
        mx="auto"
        px="4"
        gap={8}
        justify="space-between"
      >
        <VStack maxW="2xl" my="150px" w={{ base: "full", md: "50%" }} gap={6}>
          <Heading
            as="h1"
            fontWeight="extrabold"
            color="white"
            size={{ base: "3xl", md: "2xl" }}
            lineHeight={1.2}
          >
            Connect with friends and family with{" "}
            <span style={{ fontSize: "60px" }}> ChitChat</span>
          </Heading>
          <Text color="white" fontSize="xl">
            ChitChat is a social media web app where you can share your thoughts
            with your friends and family. With ChitChat, you can stay connected
            with the people who matter to you the most as well as meet new
            people.
          </Text>
          <Center gap={3}>
            <Button
              as={RouterLink}
              to={LOGIN}
              backgroundColor="#fff"
              color="teal"
              size="lg"
            >
              Login
            </Button>

            <Button
              as={RouterLink}
              to={REGISTER}
              backgroundColor="#fff"
              color="teal"
              size="lg"
            >
              Sign up
            </Button>
          </Center>
        </VStack>
        <Box display={{ base: "none", md: "block" }} ml="10px">
          <Image
            src={lady}
            w="450px"
            h="500px"
            objectFit="cover"
            objectPosition="top"
            borderRadius="3xl"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;
