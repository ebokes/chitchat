import { Box } from "@chakra-ui/react";
import { useComments } from "../../hooks/comments";
import Comment from "./Comment";

export default function CommentList({ post }) {
  const { id } = post;
  const { comments, isLoading } = useComments(id);

  if (isLoading) return "Please wait...";

  if (!comments || comments.length === 0) {
    return "No comments found.";
  }

  return (
    <Box>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </Box>
  );
}
