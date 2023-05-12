import React from "react";
import { Grid, Spinner as Loading } from "@chakra-ui/react";

const Spinner = () => {
  return (
    <Grid h="100vh" w="100vw" placeItems="center">
      <Loading color="teal" size="xl" />
    </Grid>
  );
};

export default Spinner;
