export const handleFormatValue = (value: string) => {
  return Number(value).toLocaleString("pt-BR", {
    currency: "BRL",
    style: "currency",
    minimumIntegerDigits: 1,
  });
};
