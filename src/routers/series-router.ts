import { Router } from "express";
import { deleteSeries, getAllSeries, patchSeries, postSeries } from "../controllers/series-controller.js";
import { validateBody } from "../middlewares/validateMiddleware.js";
import { createSerieSchema, updateSerieSchema} from "../schemas/serie-schema.js";

const seriesRouter: Router = Router();

seriesRouter.get("/series", getAllSeries);
seriesRouter.post("/series", validateBody(createSerieSchema), postSeries);
seriesRouter.patch("/series", validateBody(updateSerieSchema), patchSeries);
seriesRouter.delete("/series/:id", deleteSeries);

export default seriesRouter;
