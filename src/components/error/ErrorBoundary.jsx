import { Center, Heading } from "@chakra-ui/react";
import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <Center h="100vh">
          <Heading color="teal.600">Oops! Something went wrong.😬</Heading>
        </Center>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
