import express from "express";
import tarefaRoutes from "./routes/tarefaRoutes";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/tarefas", tarefaRoutes);

app.listen(PORT, () => {
  console.log(` Servidor rodando em http://localhost:${PORT}`);
});
