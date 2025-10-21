import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./swagger";
import vernamRoutes from "./routes/vernam.routes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// habilitar CORS (recomendado para testar no swagger.io)
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://editor.swagger.io",
      "*",
    ],
  })
);

// rotas principais
app.use("/", vernamRoutes);

// documentação
app.get("/docs.json", (_req, res) => res.json(swaggerSpec));
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Swagger disponível em: http://localhost:${PORT}/docs`);
});
