import { Request, Response, NextFunction } from "express";

export const validarTarefa = (req: Request, res: Response, next: NextFunction) => {
  const { titulo } = req.body;

  if (!titulo || titulo.trim() === "") {
    return res.status(400).json({ erro: "O título da tarefa é obrigatório." });
  }

  next(); // continua o fluxo normal
};