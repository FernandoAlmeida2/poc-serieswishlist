import { QueryResult } from "pg";
import connection from "../database/database.js";

async function countByGenre(): Promise<QueryResult<CountByGenreResult>> {
  return connection.query(`
  SELECT 
    genre, COUNT(id) AS "seriesCount"
  FROM series
  GROUP BY genre
  ORDER BY "seriesCount" DESC`);
}

export type CountByGenreResult = {
  genre: string;
  seriesCount: string;
};

async function countByPlatform(): Promise<QueryResult<CountByPlatformResult>> {
  return connection.query(`
  SELECT 
    platform, COUNT(id) AS "seriesCount"
  FROM series
  GROUP BY platform
  ORDER BY "seriesCount" DESC`);
}

export type CountByPlatformResult = {
  platform: string;
  seriesCount: string;
};

const rankingRepository = {
  countByGenre,
  countByPlatform
};

export default rankingRepository;
