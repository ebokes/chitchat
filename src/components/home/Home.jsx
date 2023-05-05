import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import chitchatLogo from "../../assets/chitchatIcon.svg";
import { Link as RouterLink } from "react-router-dom";
import { LOGIN, REGISTER, ROOT } from "../../App";

const Home = () => {
  return (
    <Box>
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
      <Flex bgGradient="linear(to-br, teal.500, teal.300)" py="20" h="100vh">
        <Stack maxW="3xl" mx="auto" px="4" gap={6} my="150px">
          <Heading
            as="h1"
            fontWeight="extrabold"
            color="white"
            size={{ base: "3xl", xl: "4xl" }}
          >
            Connect with friends and family with ChitChat
          </Heading>
          <Text color="white" fontSize="xl">
            ChitChat is a social media web app where you can share your
            thoughts, photos and videos with your friends and family. With
            ChitChat, you can stay connected with the people who matter to you
            the most.
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
        </Stack>
      </Flex>
    </Box>
  );
};

export default Home;
