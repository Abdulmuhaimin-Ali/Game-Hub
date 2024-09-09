import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { PlatformIconList } from "./PlatformIconList";
import { MetecriticBox } from "./MetecriticBox";
import imageurl from "../services/image-url";

interface Props {
  game: Game;
}
export const GameCard = ({ game }: Props) => {
  return (
    <Card width="300" borderRadius={10} overflow="hidden">
      <Image src={imageurl(game.background_image)} />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <MetecriticBox score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};
