import { NewSeries, Series, UpdateSeries } from "../protocols/series.js";
import seriesRepository from "../repositories/series-repository.js";
import { duplicatedNameError, notFoundError } from "./errors.js";

async function getAllSeries(): Promise<Series[]> {
  const { rows: series } = await seriesRepository.findMany();
  return series;
}

async function insertSeries(series: NewSeries) {
  const { rowCount: alreadyExists } = await seriesRepository.findByName(
    series.name
  );
  if (alreadyExists !== 0) {
    throw duplicatedNameError();
  }
  await seriesRepository.insertOne(series);
}

async function updateSeries({ name, review, status, rate }: UpdateSeries) {
  const { rowCount: seriesExists } = await seriesRepository.findByName(name);
  if (seriesExists === 0) {
    throw notFoundError();
  }
  const updateBody = {
    name,
    status,
    review: review ?? null,
    rate: rate ?? null,
  };
  await seriesRepository.updateOne(updateBody);
}

async function deleteSeries(id: number){
  const { rowCount: seriesExists } = await seriesRepository.findById(id);
  if (seriesExists === 0) {
    throw notFoundError();
  }
  await seriesRepository.deleteOne(id);
}

const seriesService = {
  getAllSeries,
  insertSeries,
  updateSeries,
  deleteSeries
};

export default seriesService;
