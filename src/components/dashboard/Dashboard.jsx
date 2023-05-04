import { Box, Button, HStack, Heading, Textarea } from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import TextareaAutoSize from "react-textarea-autosize";
import { useAddPost, usePosts } from "../../hooks/posts";
import { useAuth } from "../../hooks/auth";
import PostsList from "../post/PostsList";

function NewPost() {
  const { register, handleSubmit, reset } = useForm();
  const { addPost, isLoading: addingPost } = useAddPost();
  const { user, isLoading: authLoading } = useAuth();

  function handleAddPost(data) {
    addPost({
      uid: user.id,
      text: data.text,
    });
    reset();
  }

  return (
    <Box maxW="600px" mx="auto" py="10" px="4">
      <form onSubmit={handleSubmit(handleAddPost)}>
        <HStack justify="space-between" align="center">
          <Heading size="lg">New Post</Heading>
          <Button colorScheme="teal" type="Submit">
            Post
          </Button>
        </HStack>
        <Textarea
          as={TextareaAutoSize}
          resize="none"
          mt="5"
          placeholder="Create a new post..."
          minrows={3}
          {...register("text", { required: true })}
          isloading={authLoading.toString() || addingPost.toString()}
          loadingtext="Loading"
        />
      </form>
    </Box>
  );
}

const Dashboard = () => {
  const { posts, isLoading } = usePosts();

  if (isLoading) return "Loading posts...";

  return (
    <>
      <NewPost />
      <PostsList posts={posts} />
    </>
  );
};

export default Dashboard;
