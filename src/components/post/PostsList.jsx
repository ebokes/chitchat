import { Box, Center, Spinner, Text } from "@chakra-ui/react";
import Post from "./Post";

const PostsList = ({ posts, isLoading }) => {
  return (
    <>
      {isLoading ? (
        <Center>
          <Spinner color="teal" size="lg" />
        </Center>
      ) : (
        <Box px="4" align="center">
          {posts?.length === 0 ? (
            <Text textAlign="center" fontSize="xl">
              No posts yet... Feeling a little lonely here.
            </Text>
          ) : (
            posts?.map((post) => <Post key={post.id} post={post} />)
          )}
        </Box>
      )}
    </>
  );
};
export default PostsList;
