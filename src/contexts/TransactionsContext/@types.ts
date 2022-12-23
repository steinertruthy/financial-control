import { ReactNode } from "react";
import { iFormAddTransaction } from "../../components/AddTransaction";

export interface iTransaction {
  id: number;
  description: string;
  type: string;
  value: string;
  userId: number;
}

export interface iTransactionsContext {
  listTransactions: iTransaction[];
  handleAddTransaction: (data: iFormAddTransaction) => Promise<void>;
  handleRmvTransaction: (transaction: iTransaction) => Promise<void>;
}

export interface iTransactionsProvider {
  children: ReactNode;
}
