import { ApplicationError } from "../protocols/applicationError";

export function duplicatedNameError(): ApplicationError {
  return {
    name: "DuplicatedNameError",
    message: "There is already a series with given name!",
  };
}

export function notFoundError(): ApplicationError {
  return {
    name: "NotFoundError",
    message: "There is no series with this name!",
  };
}