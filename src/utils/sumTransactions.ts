import { iTransaction } from "../contexts/TransactionsContext/@types";
import { handleFormatValue } from "./formatValue";

export const handleSumTransactions = (transactions: iTransaction[]) => {
  const total = transactions.reduce((acc, cur) => {
    const { type, value } = cur;

    if (type == "Saída") {
      return acc - Number(value);
    } else {
      return acc + Number(value);
    }
  }, 0);

  return handleFormatValue(String(total));
};
