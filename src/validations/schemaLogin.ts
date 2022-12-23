import * as yup from "yup";

export const schemaLogin = yup.object({
  email: yup
    .string()
    .required("Email obrigatório")
    .email("Informe um email válido"),
  password: yup.string().required("Senha obrigatória"),
});
