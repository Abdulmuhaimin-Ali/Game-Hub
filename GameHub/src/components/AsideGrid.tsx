import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { GenreList } from "./GenreList";

const AsideGrid = () => {
  return (
    <SimpleGrid spacing={4}>
      <GenreList />
    </SimpleGrid>
  );
};

export default AsideGrid;
