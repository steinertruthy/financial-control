import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  Heading,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import logo from "../../assets/logo.svg";
import { InputGroup } from "../../components/InputGroup";
import { useAuthContext } from "../../contexts/AuthContext";
import { schemaRegister } from "../../validations/schemaRegiter";
import { Link as LinkRouter } from "react-router-dom";

export interface iFormRegister {
  name: string;
  email: string;
  password: string;
}

export const RegisterPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<iFormRegister>({
    resolver: yupResolver(schemaRegister),
  });
  const { handleRegister } = useAuthContext();

  return (
    <Flex h="100vh" w="100vw" bg="secondary" align="center">
      s
      <Container w="100%" maxW="400px">
        <VStack spacing="26px">
          <Image src={logo} alt="Logo Finance Control" />
          <Box w="100%" p="30px" bg="gray6" borderRadius="md">
            <Heading fontSize="title2" fontWeight="normal" mb="26px">
              Faça seu cadastro
            </Heading>

            <form onSubmit={handleSubmit(handleRegister)}>
              <VStack spacing="16px">
                <FormControl isInvalid={errors.name && true}>
                  <InputGroup
                    type="text"
                    placeholder="Nome"
                    register={register("name")}
                    msgError={errors.name?.message}
                  />
                </FormControl>

                <FormControl isInvalid={errors.email && true}>
                  <InputGroup
                    type="email"
                    placeholder="Informe um email"
                    register={register("email")}
                    msgError={errors.email?.message}
                  />
                </FormControl>

                <FormControl isInvalid={errors.password && true}>
                  <InputGroup
                    type="password"
                    placeholder="Informe uma senha "
                    register={register("password")}
                    msgError={errors.password?.message}
                  />
                </FormControl>
                <Button type="submit" variant="primary" w="100%">
                  Cadastrar-se
                </Button>
              </VStack>
            </form>
            <VStack spacing="14px" mt="14px">
              <Text as="span" fontSize="text4">
                Já possui conta?
              </Text>
              <Link as={LinkRouter} to="/" variant="redirectSecondary" w="100%">
                Fazer login
              </Link>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Flex>
  );
};
