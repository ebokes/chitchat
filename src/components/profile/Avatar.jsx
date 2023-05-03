import { Avatar as ChakraAvatar } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PROTECTED } from "../../App";

const Avatar = ({ user, size = "xl" }) => {
  return (
    <ChakraAvatar
      as={Link}
      to={`${PROTECTED}/profile/${user.id}`}
      name={user.username}
      size={size}
      src={user.avatar}
      //   src={overrideAvatar || user?.avatar}
      _hover={{ cursor: "pointer", opacity: "0.8" }}
    />
  );
};

export default Avatar;
