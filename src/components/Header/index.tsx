import { Box, Button, Container, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.svg";
import { useAuthContext } from "../../contexts/AuthContext";

export const Header = () => {
  const { handleLogout } = useAuthContext();

  return (
    <Box as="header" h="80px" w="100%" bg="secondary">
      <Container
        variant="primary"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        h="100%"
      >
        <Image src={logo} alt="Logo Finance Control" />
        <Button type="button" onClick={handleLogout}>
          Sair
        </Button>
      </Container>
    </Box>
  );
};
