import { Request, Response } from "express";
import * as Vernam from "../services/vernam.services";

export async function cipherHandler(req: Request, res: Response) {
  try {
    const { textoClaro, chave } = req.body;

    if (!textoClaro || !chave) {
      return res.status(400).json({
        error:
          "Requisição inválida: 'textoClaro' e 'chave' são parâmetros obrigatórios.",
      });
    }

    if (typeof textoClaro !== "string" || typeof chave !== "string") {
      return res.status(400).json({
        error:
          "Requisição inválida: 'textoClaro' e 'chave' devem ser do tipo 'string'.",
      });
    }

    if (textoClaro.length !== chave.length) {
      return res.status(400).json({
        error:
          "Requisição inválida: 'textoClaro' e 'chave' devem ter o mesmo tamanho.",
      });
    }

    if (textoClaro.length > 255) {
      return res.status(400).json({
        error:
          "Requisição inválida: 'textoClaro' e 'chave' devem ter um tamanho máximo de 255 caracteres.",
      });
    }

    const textoCifrado = Vernam.encrypt(textoClaro, chave);
    res.status(200).json({ textoCifrado });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Erro desconhecido.";
    res.status(400).json({ error: errorMessage });
  }
}

export async function decipherHandler(req: Request, res: Response) {
  try {
    const { textoCifrado, chave } = req.body;
    if (!textoCifrado || !chave) {
      return res.status(400).json({
        error:
          "Requisição inválida: 'textoCifrado' e 'chave' são parâmetros obrigatórios.",
      });
    }

    if (typeof textoCifrado !== "string" || typeof chave !== "string") {
      return res.status(400).json({
        error:
          "Requisição inválida: 'textoCifrado' e 'chave' devem ser do tipo 'string'.",
      });
    }

    if (textoCifrado.length !== chave.length * 8) {
      return res.status(400).json({
        error:
          "Requisição inválida: 'textoCifrado' deve ter o tamanho correto em bits correspondente ao tamanho da 'chave'.",
      });
    }

    if (textoCifrado.length > 2048) {
      return res.status(400).json({
        error:
          "Requisição inválida: 'textoCifrado' deve ter um tamanho máximo de 2048 bits.",
      });
    }

    const textoClaro = Vernam.decrypt(textoCifrado, chave);
    res.status(200).json({ textoClaro });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Erro desconhecido.";
    res.status(400).json({ error: errorMessage });
  }
}
