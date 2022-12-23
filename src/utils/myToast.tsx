import { useToast } from "@chakra-ui/react";

export class myToast {
  static success = (message: string) => {
    const toast = useToast();
    console.log(message);

    toast({
      description: message,
      status: "success",
    });
  };
}
