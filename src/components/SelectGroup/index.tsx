import { Flex, FormErrorMessage, Select } from "@chakra-ui/react";
import { ReactNode } from "react";
import { iRegister } from "../InputGroup";

interface iSelectGroupProps {
  defaultValue: string;
  children: ReactNode;
  msgError?: string;
  register?: iRegister;
}

export const SelectGroup = ({
  defaultValue,
  children,
  msgError,
  register,
}: iSelectGroupProps) => {
  return (
    <Flex direction="column" w="100%">
      <Select defaultValue={defaultValue} {...register}>
        {children}
      </Select>
      <FormErrorMessage fontSize="text4">{msgError}</FormErrorMessage>
    </Flex>
  );
};
