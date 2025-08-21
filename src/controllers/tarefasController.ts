import { Request, Response } from "express";
import { tarefas } from "../database/provisorio";
import { Tarefa } from "../models/tarefa";


export const listarTarefas = (req: Request, res: Response) => {
  return res.json(tarefas);
};


export const criarTarefa = (req: Request, res: Response) => {
  const { titulo, descricao } = req.body;

  const novaTarefa: Tarefa = {
    id: tarefas.length + 1,
    titulo,
    descricao,
    status: false
  };

  tarefas.push(novaTarefa);

  return res.status(201).json(novaTarefa);
};
