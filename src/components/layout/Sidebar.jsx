import {
  Box,
  Button,
  Code,
  Skeleton,
  SkeletonCircle,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { PROTECTED, USERS } from "../../App";
import { useAuth } from "../../hooks/auth";
import Avatar from "../profile/Avatar";

function ActiveUser() {
  const { user, isLoading } = useAuth();

  return (
    <Stack align="center" spacing="5" my="8">
      {isLoading ? (
        <>
          <SkeletonCircle size="90px" />
          <Skeleton w="80px" h="21px" my="20px" />
          <Skeleton w="251px" h="40px" />
        </>
      ) : (
        <>
          <Avatar user={user} />
          <Code>@{user.username}</Code>
          <Button
            colorScheme="teal"
            w="full"
            as={Link}
            to={`${PROTECTED}/profile/${user.id}`}
          >
            Edit Profile
          </Button>
        </>
      )}
    </Stack>
  );
}

const Sidebar = () => {
  return (
    <Box
      px="6"
      height="100vh"
      w="100%"
      maxW="300px"
      borderLeft="1px solid"
      borderLeftColor="teal.100"
      position="sticky"
      top="16"
      display={{ base: "none", md: "block" }}
    >
      <ActiveUser />
      <Box align="center">
        <Box as="ul" borderBottom="2px solid" borderColor="teal.200" />
        <Button
          variant="outline"
          colorScheme="teal"
          as={Link}
          to={USERS}
          mt="4"
          size="sm"
        >
          ALL USERS
        </Button>
      </Box>
    </Box>
  );
};

export default Sidebar;
