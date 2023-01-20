import { QueryResult } from "pg";
import connection from "../database/database.js";
import { Serie } from "../protocols/serie.js";

async function findMany(): Promise<QueryResult<Serie>> {
  return connection.query("SELECT * FROM series");
}

const seriesRepository = {
  findMany,
};

export default seriesRepository;
