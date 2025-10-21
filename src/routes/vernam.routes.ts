import { Router } from "express";
import { cipherHandler, decipherHandler } from "../controllers/vernam.controller";

const router = Router();

/**
 * @openapi
 * /cifrar:
 *   post:
 *     summary: Cifrar Texto
 *     description: Recebe `textoClaro` e `chave` (mesmo tamanho) e retorna o texto cifrado em binário.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CifrarRequest'
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CifrarResponse'
 *       '400':
 *         description: Erro de requisição
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.post("/cifrar", cipherHandler);

/**
 * @openapi
 * /decifrar:
 *   post:
 *     summary: Decifrar Texto
 *     description: Recebe `textoCifrado` (binário) e `chave`, retorna o texto claro original.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DecifrarRequest'
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DecifrarResponse'
 *       '400':
 *         description: Erro de requisição
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.post("/decifrar", decipherHandler);

export default router;
