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
import { useLogin } from "../../hooks/auth";
import { useForm } from "react-hook-form";
import { DASHBOARD, LOGIN, REGISTER, ROOT } from "../../App";
import { emailValidate, passwordValidate } from "../../utils/form-validate";
import Navbar from "../layout/Navbar";

const Login = () => {
  const { login, isLoading } = useLogin();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  async function handleLogin(data) {
    const succeeded = await login({
      email: data.email,
      password: data.password,
      redirectTo: DASHBOARD,
    });
    if (succeeded) reset();
  }

  const credentials = [
    { title: "Home", route: ROOT },
    { title: "Login", route: LOGIN },
    { title: "Signup", route: REGISTER },
  ];

  return (
    <>
      <Navbar navlinks={credentials} />
      <Center w="100%" h="100vh">
        <Box mx="1" maxW="lg" p="9" borderWidth="1px" borderRadius="lg">
          <Heading mb="4px" size="lg" alignItems="center">
            Log In
          </Heading>
          <form onSubmit={handleSubmit(handleLogin)}>
            <FormControl isInvalid={errors.email} py="2">
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="user@email.com"
                {...register("email", emailValidate)}
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.password} py="2">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="password"
                {...register("password", passwordValidate)}
              />
              <FormErrorMessage>
                {errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>
            <Button
              mt="4px"
              type="submit"
              colorScheme="teal"
              size="md"
              w="full"
              isLoading={isLoading}
              loadingText="Logging In"
            >
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
    </>
  );
};
export default Login;
