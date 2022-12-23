import { extendTheme } from "@chakra-ui/react";
import { colors } from "./colors";
import { fontSizes } from "./fontSizes";
import { Button } from "./Components/Button";
import { Container } from "./Components/Container";
import { Link } from "./Components/Link";

export const myTheme = extendTheme({
  colors,
  components: { Button, Container, Link },
  fontSizes,
});
