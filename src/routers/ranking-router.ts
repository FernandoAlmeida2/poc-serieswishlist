import { Router } from "express";
import { getRankingByGenre } from "../controllers/ranking-controller.js";

const rankingRouter = Router();

rankingRouter.get("/ranking/genre", getRankingByGenre);

export default rankingRouter;