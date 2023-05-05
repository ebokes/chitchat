import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PROTECTED } from "../../App";

function UsernameButton({ user }) {
  return (
    <Button
      as={Link}
      to={`${PROTECTED}/profile/${user.id}`}
      colorScheme="teal"
      variant="link"
      justifyContent="flex-start"
    >
      {user.username}
    </Button>
  );
}
export default UsernameButton;
