import jwt from "jsonwebtoken";
import { createError } from "./error";
import { NextFunction, Request, Response } from "express";
import config from "../config";

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization;
  if (!token) {
    return next(createError(401, "You are not authenticated!"));
  }

  jwt.verify(token, config.JWTSECRET, (err: any, user: any) => {
    if (err) return next(createError(403, "Token is not valid!"));
    next();
  });
};
