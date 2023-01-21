import { QueryResult } from "pg";
import connection from "../database/database.js";
import { NewSeries, Series, UpdateSeries } from "../protocols/series.js";

async function findMany(): Promise<QueryResult<Series>> {
  return connection.query("SELECT * FROM series");
}

async function findByName(name: string): Promise<QueryResult<Series>> {
  return connection.query("SELECT * FROM series WHERE name = $1", [name]);
}

async function findById(id: number): Promise<QueryResult<Series>> {
  return connection.query("SELECT * FROM series WHERE id = $1", [id]);
}

async function insertOne({ name, platform, genre }: NewSeries) {
  connection.query(
    "INSERT INTO series (name, platform, genre) VALUES ($1, $2, $3)",
    [name, platform, genre]
  );
}

async function updateOne({ name, review, status, rate }: UpdateSeries) {
  connection.query(
    "UPDATE series SET review = $1, status = $2, rate = $3 WHERE name = $4",
    [review, status, rate, name]
  );
}

async function deleteOne(id: number) {
  connection.query("DELETE FROM series WHERE id = $1", [id]);
}

const seriesRepository = {
  findMany,
  findByName,
  findById,
  insertOne,
  updateOne,
  deleteOne,
};

export default seriesRepository;
