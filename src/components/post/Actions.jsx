import { Flex, IconButton } from "@chakra-ui/react";
import { FaRegHeart, FaHeart, FaComment, FaRegComment } from "react-icons/fa";
import { useAuth } from "../../hooks/auth";
import { useToggleLike } from "../../hooks/posts";
import { Link } from "react-router-dom";
import { PROTECTED } from "../../App";
import { useComments } from "../../hooks/comments";

function Actions({ post }) {
  const { id, likes, uid } = post;
  const { user, isLoading: userLoading } = useAuth();

  const isLiked = likes.includes(user?.id);
  const config = {
    id,
    isLiked,
    uid: user?.id,
  };

  const { toggleLike, isLoading: likeLoading } = useToggleLike(config);

  const { comments, isLoading: commentsLoading } = useComments(id);

  return (
    <Flex p="2">
      <Flex alignItems="center">
        <IconButton
          onClick={toggleLike}
          isLoading={likeLoading || userLoading}
          size="md"
          colorScheme="red"
          variant="ghost"
          icon={isLiked ? <FaHeart /> : <FaRegHeart />}
          isRound
        />
        {likes.length}
      </Flex>
      <Flex alignItems="center" ml="2">
        <IconButton
          as={Link}
          to={`${PROTECTED}/comments/${id}`}
          isLoading={commentsLoading}
          size="md"
          colorScheme="teal"
          variant="ghost"
          icon={comments?.length === 0 ? <FaRegComment /> : <FaComment />}
          isRound
        />
        {comments?.length}
      </Flex>
    </Flex>
  );
}
export default Actions;