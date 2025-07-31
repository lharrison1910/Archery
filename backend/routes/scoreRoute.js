import express from "express";
import { getData, postData, updateData } from "../modules/db.js";

export const scoreRoute = express.Router();
scoreRoute.use(express.json());

// get scores for user
scoreRoute.post("/scores", async (req, res) => {
  const id = req.body.id;
  const scores = await getData({ table: "Scores", column: "id", query: id });
  console.log(scores[0]);
  res.send(scores[0]);
});

// add new scores
scoreRoute.post("/new", async (req, res) => {
  const [id, scores] = [req.body.id, req.body.scores];
  const response = await postData({ table: "Scores", userId: id, scores });
  console.log(response);
  res.send(response);
});

// update scores
scoreRoute.post("/update", async (req, res) => {
  const [id, scores] = [req.body.id, req.body.scores];
  const response = await updateData({ table: "Scores", userId: id, scores });
  console.log(response);
  res.send(response);
});
