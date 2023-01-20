import { Serie } from "../protocols/serie.js";
import seriesRepository from "../repositories/series-repository.js";

async function getAllSeries(): Promise<Serie[]> {
  const { rows: series } = await seriesRepository.findMany();
  return series;
}

const seriesService = {
  getAllSeries,
};

export default seriesService;
