import { Box, Center, Heading, Text } from "@chakra-ui/react";
import React from "react";

const NotFound = () => {
  return (
    <>
      <Box>
        <Center py={3} mb={16} alignItems="center" bg="teal">
          <Heading fontSize={40} as="h1" color="white">
            Page Not Found
          </Heading>
        </Center>
      </Box>
      <Box maxW="1200px" mx={{ base: 2, md: 5 }}>
        <Heading as="h2" fontSize={30} color="teal.600">
          Error 404-Page NOT Found
        </Heading>
        <Text fontSize={16}>
          It seems we can't find what you're looking for.
        </Text>
        <Heading as="h2" fontSize={23} mt={7} color="teal.600">
          This might be because:
        </Heading>
        <Text>
          You have typed the web address incorrectly, or the page you were
          looking for may have been moved, updated or deleted.
        </Text>
        <Heading as="h2" fontSize={23} mt={7} color="teal.600">
          Please try the following instead:
        </Heading>
        <Text>
          Check for a mis-typed URL error, then press the refresh button on your
          browser.
        </Text>
      </Box>
    </>
  );
};

export default NotFound;
