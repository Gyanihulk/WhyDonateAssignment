import { Express } from "express";
const express = require("express");
import config from "./config";
const bodyParser = require("body-parser");
import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import http from "http";
import cookieParser from "cookie-parser";
import cors from "cors";

const router = express.Router();

import bcrypt from "bcryptjs";
import { createError } from "./utils/error";
import User from "./models/User";
import jwt from "jsonwebtoken";


const app: Express = express();

app.use(bodyParser.json());

const port = config.PORT;

//middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());

const connect = async () => {
  try {
    await mongoose.connect(`${config.MONGO}`);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

app.use("/api/auth", require("./routes/auth"));

app.get("/", (req: Request, res: Response,) => {
  console.log("hello");
  res.send("hello")
});


app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

const httpServer = http.createServer(app);
httpServer.listen(port, () => {
  connect();
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
