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

const rankingRepository = {
    countByGenre
};

export default rankingRepository;