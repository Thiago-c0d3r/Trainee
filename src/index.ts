import express from "express";
import tarefaRoutes from "./routes/tarefaRoutes";
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());

app.use(express.json());

app.use("/tarefas", tarefaRoutes);

app.listen(PORT, () => {
  console.log(` Servidor rodando em http://localhost:${PORT}`);
});
