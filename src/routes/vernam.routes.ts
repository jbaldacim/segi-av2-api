import { Router } from "express";
import {
  cipherHandler,
  decipherHandler,
} from "../controllers/vernam.controller";

const router = Router();

router.post("/cifrar", cipherHandler);
router.post("/decifrar", decipherHandler);

export default router;
