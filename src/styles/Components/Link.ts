import { defineStyleConfig } from "@chakra-ui/react";

export const Link = defineStyleConfig({
  baseStyle: {
    display: "flex",
    justifyContent: "center",
    borderRadius: "md",
    p: "8px",
    _hover: {
      textDecoration: "none",
    },
  },

  variants: {
    redirectPrimary: {
      bg: "primary",
      color: "gray6",
      fontWeight: "semibold",
      _hover: {
        bg: "secondary",
      },
    },
    redirectSecondary: {
      bg: "gray2",
      color: "gray6",
      fontWeight: "semibold",
      _hover: {
        bg: "gray3",
      },
    },
  },
});
