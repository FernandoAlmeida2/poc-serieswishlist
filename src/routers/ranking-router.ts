import { Router } from "express";
import { getRankingByGenre, getRankingByPlatform } from "../controllers/ranking-controller.js";

const rankingRouter = Router();

rankingRouter.get("/ranking/genre", getRankingByGenre);
rankingRouter.get("/ranking/platform", getRankingByPlatform);

export default rankingRouter;