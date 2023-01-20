import { Request, Response } from "express";
import seriesService from "../services/series-service.js";

export async function getAllSeries(req: Request, res: Response): Promise<void> {
  const series = await seriesService.getAllSeries();
  res.status(200).send(series);
}
