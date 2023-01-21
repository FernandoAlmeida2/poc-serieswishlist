import { Request, Response } from "express";
import { UpdateSeries } from "../protocols/series.js";
import { NewSeries, Series } from "../protocols/series.js";
import seriesService from "../services/series-service.js";

export async function getAllSeries(req: Request, res: Response): Promise<void> {
  const series = await seriesService.getAllSeries();
  res.status(200).send(series);
}

export async function postSeries(req: Request, res: Response): Promise<void> {
  const series = req.body as NewSeries;

  try{
    await seriesService.insertSeries(series);
    res.status(201).send("Series successfully inserted!");
  }catch(error){
    if(error.name === "DuplicatedNameError"){
      res.status(409).send(error);
    }
  }
}

export async function patchSeries(req: Request, res: Response): Promise<void> {
  const series = req.body as UpdateSeries;

  try{
    await seriesService.updateSeries(series);
    res.status(200).send("Series successfully updated!");
  }catch(error){
    if(error.name === "NotFoundError"){
      res.status(409).send(error);
    }
  }
}

export async function deleteSeries(req: Request, res: Response): Promise<void> {
  const { id } = req.params;

  try{
    await seriesService.deleteSeries(Number(id));
    res.status(200).send("Series successfully deleted!");
  }catch(error){
    if(error.name === "NotFoundError"){
      res.status(409).send(error);
    }
  }
}
