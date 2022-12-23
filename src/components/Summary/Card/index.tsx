import { Flex, Icon, ListItem, Text } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";

interface iCard {
  icon: IconType;
  type: string;
  total: string;
}

interface iCardProps {
  card: iCard;
}

export const Card = ({ card }: iCardProps) => {
  const { icon, type, total } = card;

  return (
    <ListItem
      display="flex"
      gap="16px"
      w="100%"
      p="16px"
      borderWidth="1px"
      borderColor="gray4"
      borderRadius="md"
    >
      <Flex
        borderRadius="md"
        align="center"
        justify="center"
        w="50px"
        h="50px"
        bg="gray4"
      >
        <Icon w="24px" h="24px" as={icon} />
      </Flex>
      <Flex direction="column">
        <Text as="span" fontSize="text3">
          {type}
        </Text>
        <Text fontSize="title3" fontWeight="semibold">
          {total}
        </Text>
      </Flex>
    </ListItem>
  );
};
