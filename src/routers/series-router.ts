import { Router } from "express";
import { getAllSeries } from "../controllers/series-controller.js";

const seriesRouter: Router = Router();

seriesRouter.get("/series", getAllSeries);

export default seriesRouter;
