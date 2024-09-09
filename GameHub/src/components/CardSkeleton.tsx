import {
  Card,
  CardBody,
  HStack,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

export const CardSkeleton = () => {
  return (
    <Card
      width="300px"
      justifyContent="space-between"
      borderRadius={10}
      overflow="hidden"
    >
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};
