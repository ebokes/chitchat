import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { REGISTER } from "../../App";

const Login = () => {
  return (
    <Center w="100%" h="100vh">
      <Box mx="1" maxW="lg" p="9" borderWidth="1px" borderRadius="lg">
        <Heading mb="4px" size="lg" alignItems="center">
          Log In
        </Heading>
        <form onSubmit={() => {}}>
          <FormControl isInvalid={true} py="2">
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="user@email.com" />
            <FormErrorMessage>Incorrect Email Adress</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={true} py="2">
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="password" />
            <FormErrorMessage>Incorrect Password</FormErrorMessage>
          </FormControl>
          <Button mt="4px" type="submit" colorScheme="teal" size="md" w="full">
            Log In
          </Button>
          <Text fontSize="xlg" align="center" mt="6">
            Don't have an account?{" "}
            <Link
              as={RouterLink}
              to={REGISTER}
              color="teal.800"
              fontWeight="medium"
              textDecor="underline"
              _hover={{ background: "teal.100" }}
            >
              Register
            </Link>{" "}
            instead!
          </Text>
        </form>
      </Box>
    </Center>
  );
};
export default Login;
