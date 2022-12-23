import {
  Button,
  Flex,
  FormControl,
  Heading,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTransactionsContext } from "../../contexts/TransactionsContext";
import { schemaAddTransactions } from "../../validations/schemaAddTransactions";
import { InputGroup } from "../InputGroup";
import { SelectGroup } from "../SelectGroup";

export interface iFormAddTransaction {
  description: string;
  type: string;
  value: string;
}

export const AddTransaction = () => {
  const { handleAddTransaction } = useTransactionsContext();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<iFormAddTransaction>({
    resolver: yupResolver(schemaAddTransactions),
  });
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onSubmit = (data: iFormAddTransaction) => {
    reset();
    onClose();
    handleAddTransaction(data);
  };

  return (
    <Flex mt="32px" justify="space-between">
      <Heading fontSize="title1">Dashboard</Heading>
      <Button variant="primary" onClick={onOpen}>
        Adicionar
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay>
          <ModalContent m="16px">
            <ModalHeader>Adicionar Transação</ModalHeader>
            <ModalCloseButton />
            <ModalBody p="22px">
              <form onSubmit={handleSubmit(onSubmit)}>
                <Flex direction="column" gap="16px">
                  <FormControl isInvalid={errors.description && true}>
                    <InputGroup
                      placeholder="Ex: Compras no shopping"
                      type="text"
                      register={register("description")}
                      msgError={errors.description?.message}
                    />
                  </FormControl>
                  <HStack spacing="16px">
                    <FormControl isInvalid={errors.type && true}>
                      <SelectGroup
                        defaultValue=""
                        register={register("type")}
                        msgError={errors.type?.message}
                      >
                        <option value="" disabled>
                          Selecionar
                        </option>
                        <option value="Entrada">Entrada</option>
                        <option value="Saída">Saída</option>
                      </SelectGroup>
                    </FormControl>
                    <FormControl isInvalid={errors.value && true}>
                      <InputGroup
                        placeholder="Valor"
                        type="number"
                        register={register("value")}
                        msgError={errors.value?.message}
                      />
                    </FormControl>
                  </HStack>
                  <Button variant="primary" w="100%" type="submit">
                    Adicionar
                  </Button>
                </Flex>
              </form>
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </Flex>
  );
};
