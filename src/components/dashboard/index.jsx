import { Box, Button, HStack, Heading, Textarea } from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import TextareaAutoSize from "react-textarea-autosize";
import { useAddPost } from "../../hooks/posts";
import { useAuth } from "../../hooks/auth";

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
    <Box maxW="600px" mx="auto" py="10">
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
          minRows={3}
          {...register("text", { required: true })}
          isLoading={authLoading || addingPost}
          loadingText="Loading"
        />
      </form>
    </Box>
  );
}

const Dashboard = () => {
  return (
    <>
      <NewPost />
    </>
  );
};

export default Dashboard;
