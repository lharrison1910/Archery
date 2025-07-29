import express from "express";
import { getData } from "../modules/db.js";

export const scoreRoute = express.Router();
scoreRoute.use(express.json());

// get scores for user
scoreRoute.post("/scores", async (req, res) => {
  res.send("this will be data");
  const id = req.body.id;
  const scores = await getData({ table: "Scores", column: "id", query: id });
  res.send(scores[0]);
});

// add new scores
scoreRoute.post("/new", (req, res) => {
  res.send("success");
});
