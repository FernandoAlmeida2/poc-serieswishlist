import { NextFunction, Request, Response } from "express";

export function errorHandlingMiddleware(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  //if (error.type === "error_not_found") return res.status(404).send({ message: error.message });
  console.log(error);
  return res.sendStatus(500);
}
