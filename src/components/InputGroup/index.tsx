import { ChangeEventHandler } from "react";
import { Flex, FormErrorMessage, Input } from "@chakra-ui/react";

export interface iRegister {
  onChange: ChangeEventHandler;
  onBlur: ChangeEventHandler;
  ref: React.Ref<any>;
  name: string;
}

interface iInputGroupProps {
  type: string;
  placeholder: string;
  register?: iRegister;
  msgError?: string;
}

export const InputGroup = ({
  type,
  placeholder,
  register,
  msgError,
}: iInputGroupProps) => {
  return (
    <Flex direction="column" w="100%">
      <Input type={type} placeholder={placeholder} {...register} />
      <FormErrorMessage fontSize="text4">{msgError}</FormErrorMessage>
    </Flex>
  );
};
