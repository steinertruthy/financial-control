import { UnorderedList, VStack } from "@chakra-ui/react";
import { useTransactionsContext } from "../../contexts/TransactionsContext";
import { Card } from "./Card";

export const ListTransactions = () => {
  const { listTransactions } = useTransactionsContext();
  return (
    <UnorderedList mt="64px" ml="0">
      <VStack spacing="16px" w="100%">
        {listTransactions.length > 0 &&
          listTransactions.map((transaction) => (
            <Card key={transaction.id} transaction={transaction} />
          ))}
      </VStack>
    </UnorderedList>
  );
};
