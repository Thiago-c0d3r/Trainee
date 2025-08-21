import { Router } from "express";
import { listarTarefas, criarTarefa } from "../controllers/tarefasController";
import { validarTarefa } from "../middleware/validarTarefa";

const router = Router();


router.get("/", listarTarefas);


router.post("/", validarTarefa, criarTarefa);

export default router;
