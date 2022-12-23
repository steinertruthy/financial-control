import * as yup from "yup";

export const schemaAddTransactions = yup.object({
  description: yup.string().required("Descrição obrigatória"),
  type: yup.string().required("Tipo obrigatório"),
  value: yup.string().required("Valor orbigatório"),
});
