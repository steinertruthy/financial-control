import { defineStyleConfig } from "@chakra-ui/react";

export const Button = defineStyleConfig({
  variants: {
    primary: {
      bg: "primary",
      color: "gray6",
      _hover: {
        bg: "secondary",
      },
    },
    secondary: {
      bg: "gray2",
      color: "gray6",
      _hover: {
        bg: "gray3",
      },
    },
  },
});
