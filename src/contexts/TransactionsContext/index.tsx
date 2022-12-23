import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { iFormAddTransaction } from "../../components/AddTransaction";
import {
  iTransaction,
  iTransactionsContext,
  iTransactionsProvider,
} from "./@types";
import { Toast, useToast } from "@chakra-ui/react";
import { myToast } from "../../utils/myToast";

const TransactionsContext = createContext({} as iTransactionsContext);

export const TransactionsProvider = ({ children }: iTransactionsProvider) => {
  const [listTransactions, setListTransactions] = useState(
    [] as iTransaction[]
  );
  const token = localStorage.getItem("@financialControl:token");
  const userId = Number(localStorage.getItem("@financialControl:userId"));
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  const toast = useToast({
    position: "bottom-right",
    duration: 2500,
  });

  useEffect(() => {
    handleGetAllTransactions();
  }, []);

  const handleGetAllTransactions = async () => {
    try {
      const response = await api.get(`/users/${userId}`, {
        params: {
          _embed: "transactions",
        },
      });

      const { data } = response;
      setListTransactions(data.transactions);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddTransaction = async (
    data: iFormAddTransaction
  ): Promise<void> => {
    const dataRequets = {
      ...data,
      userId: userId,
    };
    try {
      const response = await api.post("/transactions", dataRequets);
      toast({
        description: "Transação adicionada com sucesso",
        status: "success",
      });
      setListTransactions([...listTransactions, response.data]);
    } catch (error) {
      toast({
        description: "Oops: algo de errado não está certo! xD",
        status: "error",
      });
      console.error(error);
    }
  };

  const handleRmvTransaction = async (
    transaction: iTransaction
  ): Promise<void> => {
    const { id } = transaction;
    try {
      await api.delete(`/transactions/${id}`);
      const trnsactionsFIltered = listTransactions.filter(
        ({ id }) => id != transaction.id
      );
      toast({
        description: "Transação removida com sucesso",
        status: "success",
      });
      setListTransactions(trnsactionsFIltered);
    } catch (error) {
      Toast({
        description: "Oops: algo de errado não está certo! xD",
        status: "error",
      });
      console.error(error);
    }
  };

  return (
    <TransactionsContext.Provider
      value={{ listTransactions, handleAddTransaction, handleRmvTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};

export const useTransactionsContext = () => {
  const context = useContext(TransactionsContext);
  return context;
};
