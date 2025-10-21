// src/swagger.ts
import swaggerJSDoc from "swagger-jsdoc";

export const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: "3.0.3",
    info: {
      title: "Cifra de Vernam API",
      version: "1.0.0",
      description:
        "API para cifrar e decifrar texto usando a Cifra de Vernam (XOR).",
    },
    servers: [{ url: "http://localhost:3000" }],
    components: {
      schemas: {
        CifrarRequest: {
          type: "object",
          required: ["textoClaro", "chave"],
          properties: {
            textoClaro: { type: "string", example: 'OLA', maxLength: 255 },
            chave: { type: "string", example: 'CHT', maxLength: 255 },
          },
        },
        CifrarResponse: {
          type: "object",
          required: ["textoCifrado"],
          properties: {
            textoCifrado: {
              type: "string",
              description: "Sequência binária (0/1)",
              pattern: "^[01]+$",
            },
          },
        },
        DecifrarRequest: {
          type: "object",
          required: ["textoCifrado", "chave"],
          properties: {
            textoCifrado: {
              type: "string",
              example: '000011000000010000010101',
              pattern: "^[01]+$",
              maxLength: 2048,
              description:
                "Número de bits deve ser 8 × tamanho da chave (validado no backend).",
            },
            chave: { type: "string", example: 'CHT', maxLength: 255 },
          },
        },
        DecifrarResponse: {
          type: "object",
          required: ["textoClaro"],
          properties: { textoClaro: { type: "string" } },
        },
        Error: {
          type: "object",
          required: ["error"],
          properties: { error: { type: "string" } },
        },
      },
    },
  },
  apis: ["./src/routes/**/*.ts", "./src/controllers/**/*.ts"],
});
