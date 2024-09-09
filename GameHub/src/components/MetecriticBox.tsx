import React from "react";
import { Game } from "../hooks/useGames";
import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

export const MetecriticBox = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 50 ? "yellow" : "";

  return (
    <Badge colorScheme={color} fontSize="14px" paddingX={2} borderRadius={"6"}>
      {score}
    </Badge>
  );
};
