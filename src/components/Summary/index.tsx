import {
  Box,
  Flex,
  Heading,
  UnorderedList,
  useMediaQuery,
} from "@chakra-ui/react";
import { GiPayMoney, GiReceiveMoney, GiTakeMyMoney } from "react-icons/gi";
import { useTransactionsContext } from "../../contexts/TransactionsContext";
import { handleSumTransactions } from "../../utils/sumTransactions";
import { Card } from "./Card";

export const Summary = () => {
  const isLarger800 = useMediaQuery("(min-width: 800px)");
  const { listTransactions } = useTransactionsContext();

  const inputTransactions = listTransactions.filter(
    ({ type }) => type == "Entrada"
  );
  const outputTransactions = listTransactions.filter(
    ({ type }) => type == "Saída"
  );
  const totalInput = handleSumTransactions(inputTransactions);
  const totalOutput = handleSumTransactions(outputTransactions);
  const totalTransactions = handleSumTransactions(listTransactions);

  const cards = [
    {
      icon: GiReceiveMoney,
      type: "Entrada",
      total: totalInput,
    },
    {
      icon: GiPayMoney,
      type: "Saída",
      total: totalOutput,
    },
    {
      icon: GiTakeMyMoney,
      type: "Total",
      total: totalTransactions,
    },
  ];

  return (
    <Box>
      <Heading as="h3" mt="32px" fontSize="title2">
        Resumo
      </Heading>

      <UnorderedList
        display="flex"
        flexDirection={isLarger800[0] ? "row" : "column"}
        justifyContent="space-between"
        gap="22px"
        mt="16px"
        ml="0"
      >
        {cards.map((card) => (
          <Card key={card.type} card={card} />
        ))}
      </UnorderedList>
    </Box>
  );
};
