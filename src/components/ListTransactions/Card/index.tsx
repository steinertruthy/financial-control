import { Box, Button, Flex, Icon, ListItem, Text } from "@chakra-ui/react";
import { BsTrash } from "react-icons/bs";
import { useTransactionsContext } from "../../../contexts/TransactionsContext";
import { iTransaction } from "../../../contexts/TransactionsContext/@types";
import { handleFormatValue } from "../../../utils/formatValue";

interface iCardProps {
  transaction: iTransaction;
}

export const Card = ({ transaction }: iCardProps) => {
  const { handleRmvTransaction } = useTransactionsContext();
  const { description, type, value } = transaction;
  const valueFormatted = handleFormatValue(value);

  return (
    <ListItem
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      w="100%"
      p="16px"
      borderWidth="2px"
      borderColor="gray4"
      borderRadius="md"
    >
      <Box fontWeight="semibold">
        <Text fontSize="title3">{description}</Text>
        <Text color={type == "Entrada" ? "green" : "red"}>
          {valueFormatted}
        </Text>
      </Box>
      <Button onClick={() => handleRmvTransaction(transaction)}>
        <Icon fontSize="text1" as={BsTrash} />
      </Button>
    </ListItem>
  );
};
