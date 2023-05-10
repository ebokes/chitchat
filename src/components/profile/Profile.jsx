import {
  Button,
  Divider,
  Flex,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { usePosts } from "../../hooks/posts";
import { useUser } from "../../hooks/users";
import { useAuth } from "../../hooks/auth";
import { useParams } from "react-router-dom";
import Avatar from "./Avatar";
import { format } from "date-fns";
import PostsList from "../post/PostsList";
import EditProfile from "./EditProfile";

export default function Profile() {
  const { id } = useParams();
  const { posts, isLoading: postsLoading } = usePosts(id);
  const { user, isLoading: userLoading } = useUser(id);
  const { user: authUser, isLoading: authLoading } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();

  if (userLoading) return "Loading...";

  return (
    <Stack spacing="5">
      <Flex
        p={["4", "6"]}
        pos="relative"
        align="center"
        flexDirection={{ base: "column", sm: "row" }}
      >
        <Avatar size="2xl" user={user} pos="relative" />

        <Stack textAlign={["center", "left"]} ml={["0", "10"]}>
          <Text fontSize="2xl" textAlign={{ base: "center", sm: "left" }}>
            {user.username}
          </Text>
          <Flex
            columnGap={["0px", "50px"]}
            rowGap={1}
            flexDirection={{ base: "column", sm: "row" }}
          >
            <Text color="gray.700" fontSize={["sm", "lg"]}>
              Posts: {posts.length}
            </Text>

            <Text color="gray.700" fontSize={["sm", "lg"]}>
              Joined: {format(user.date, "MMMM YYY")}
            </Text>
            {!authLoading && authUser.id === user.id && (
              <Button
                pos={["static", "absolute"]}
                mb="2"
                top="6"
                right="6"
                colorScheme="teal"
                onClick={onOpen}
              >
                Change avatar
              </Button>
            )}
          </Flex>
        </Stack>

        <EditProfile isOpen={isOpen} onClose={onClose} />
      </Flex>
      <Divider />

      {postsLoading ? (
        <Text>Posts are loading...</Text>
      ) : (
        <PostsList posts={posts} />
      )}
    </Stack>
  );
}
