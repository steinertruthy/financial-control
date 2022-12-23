import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  FormControl,
  Heading,
  Image,
  Link,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import logo from "../../assets/logo.svg";
import { useAuthContext } from "../../contexts/AuthContext";
import { InputGroup } from "../../components/InputGroup";
import { schemaLogin } from "../../validations/schemaLogin";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link as LinkRouter } from "react-router-dom";

export interface iFormLogin {
  email: string;
  password: string;
}

export const LoginPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<iFormLogin>({
    resolver: yupResolver(schemaLogin),
  });
  const { handleLogin } = useAuthContext();

  return (
    <Flex h="100vh" w="100vw" bg="secondary" align="center">
      <Container w="100%" maxW="400px">
        <VStack spacing="26px">
          <Image src={logo} alt="Logo Financial Control" />
          <Box borderRadius="md" w="100%" bg="gray6" p="30px">
            <Heading fontSize="title2" fontWeight="normal" mb="26px">
              Faça seu login
            </Heading>

            <form onSubmit={handleSubmit(handleLogin)}>
              <VStack spacing="16px">
                <FormControl isInvalid={errors.email && true}>
                  <InputGroup
                    type="email"
                    placeholder="Informe seu email"
                    register={register("email")}
                    msgError={errors.email?.message}
                  />
                </FormControl>

                <FormControl isInvalid={errors.password && true}>
                  <InputGroup
                    type="password"
                    placeholder="Senha"
                    register={register("password")}
                    msgError={errors.password?.message}
                  />
                </FormControl>

                <Button variant="primary" type="submit" w="100%">
                  Logar
                </Button>
              </VStack>
            </form>

            <VStack spacing="14px" mt="14px">
              <Center as="span" fontSize="text4">
                Ainda não possui conta?
              </Center>
              <Link
                as={LinkRouter}
                to="/register"
                variant="redirectSecondary"
                width="100%"
              >
                Cadastrar-se
              </Link>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Flex>
  );
};
