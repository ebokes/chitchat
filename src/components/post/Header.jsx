import { Box, Flex, Skeleton, SkeletonCircle, Text } from "@chakra-ui/react";
import Avatar from "../../components/profile/Avatar";
import { formatDistanceToNow } from "date-fns";
import { useUser } from "../../hooks/users";
import UsernameButton from "../profile/UsernameButton";

function Header({ post }) {
  const { uid, date } = post;
  const { user, isLoading } = useUser(uid);

  return (
    <Flex
      alignItems="center"
      borderBottom="2px solid"
      borderColor="teal.100"
      p="3"
      bg="gray.50"
    >
      {isLoading ? (
        <>
          <SkeletonCircle size="48px" />
          <Box ml="4">
            <Skeleton h="18px" w="78px" mb="5px" />
            <Skeleton h="15px" w="66px" />
          </Box>
        </>
      ) : (
        <>
          <Avatar user={user} size="md" />
          <Box ml="4">
            <UsernameButton user={user} />
            <Text fontSize="sm" color="gray.500">
              {formatDistanceToNow(date)} ago
            </Text>
          </Box>
        </>
      )}
    </Flex>
  );
}
export default Header;
