import { Request, Response } from "express";
import rankingService from "../services/ranking-service.js";

export async function getRankingByGenre(req: Request, res: Response) {
  const ranking = await rankingService.rankingByGenre();
  res.status(200).send(ranking);
}

export async function getRankingByPlatform(req: Request, res: Response) {
  const ranking = await rankingService.rankingByPlatform();
  res.status(200).send(ranking);
}
