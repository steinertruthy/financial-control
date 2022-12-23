import { Container } from "@chakra-ui/react";
import { TransactionsProvider } from "../../contexts/TransactionsContext";
import { Header } from "../../components/Header";
import { AddTransaction } from "../../components/AddTransaction";
import { Summary } from "../../components/Summary";
import { ListTransactions } from "../../components/ListTransactions";

export const DashboardPage = () => {
  return (
    <div>
      <Header />
      <Container variant="primary">
        <TransactionsProvider>
          <AddTransaction />
          <Summary />
          <ListTransactions />
        </TransactionsProvider>
      </Container>
    </div>
  );
};
