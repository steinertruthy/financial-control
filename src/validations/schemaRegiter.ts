import * as yup from "yup";

export const schemaRegister = yup.object({
  name: yup
    .string()
    .required("Nome obrigatório")
    .min(5, "No mínimo 5 caracteres"),
  email: yup
    .string()
    .required("Email obirgatório")
    .email("Informe um email válido"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(6, "No mínimo 6 caracteres"),
});
