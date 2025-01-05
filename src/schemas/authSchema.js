import { z } from "zod";

//registerSchema
export const registerSchema = z.object({
  username: z.string({
    required_error: "Username es requerido",
  }),
  email: z
    .string({
      required_error: "Email es requerido",
    })
    .email({
      message: "Email es invalido",
    }),
  password: z
    .string({
      required_error: "Password es requerido",
    })
    .min(6, {
      message: "El formato no es permitido, al menos 6 caracteres",
    }),
});

//loginSchema
export const loginSchema = z.object({
  email: z
    .string({
      required_error: "email es requerido",
    })
    .email({
      message: "Email no es válido",
    }),
  password: z
    .string({
      required_error: "password es requerido",
    })
    .min(6, {
      message: "Pasword minimo 6 caracteres",
    }),
});
