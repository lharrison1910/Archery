import express from "express";

export const dbRoute = express.Router();
dbRoute.use(express.json());

// get scores for user
dbRoute.get("/scores", (req, res) => {
  res.send("this will be data");
});

// add new scores
dbRoute.post("/new", (req, res) => {
  res.send("success");
});
