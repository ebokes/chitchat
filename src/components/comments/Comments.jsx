import { Box, Center, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Post from "../post/Post";
import { usePost } from "../../hooks/posts";
import NewComment from "./NewComment";
import CommentList from "./CommentList";

function Comments() {
  const { id } = useParams();
  const { post, isLoading } = usePost(id);

  return (
    <Box align="center" pt="50">
      {isLoading ? (
        <Center>
          <Spinner color="teal" size="xl" />
        </Center>
      ) : (
        <>
          <Post post={post} />
          <NewComment post={post} />
          <CommentList post={post} />
        </>
      )}
    </Box>
  );
}
export default Comments;
