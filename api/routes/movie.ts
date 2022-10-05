const express = require("express");
const router = express.Router();
import { NextFunction, Request, Response } from "express";
import axios from "axios";
import config from "../config";
import { verifyToken } from "../utils/verifyToken";
const omdb = new (require("omdbapi"))(config.OMDB_SECRET);
const getOmdbClient = async () => {
  return axios.create({
    baseURL: "http://www.omdbapi.com",
    timeout: 100000,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
};

router.post(
  "/byname",
  verifyToken,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name } = req.body;

    //   omdb.search({
    //     search: 'game of thrones',  // required
    //     type: 'series',             // optionnal  ['series', 'episode', 'movie']
    //     year: '2011',               // optionnal
    //     page: '1'                   // optionnal (1 to 100)
    // }).then(res => {
    //     console.log('got response:', res);
    // }).catch(console.error);

      const client = omdb
        .get({
          title: name, 
        })
        .then((data: any) => {
          res.send(data);
        })
        .catch((e: any) => {
          console.error;
          next(e);
        });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
);

module.exports = router;
