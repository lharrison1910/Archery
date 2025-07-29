import express from "express";
import bycrypt, { hash } from "bcrypt";
import { getData, postData } from "../modules/db.js";

const hashPassword = async (password) => {
  const salt = 10;
  return await bycrypt.hash(password, salt);
};

const comparePassword = async (unhashed, hashed) => {
  return bycrypt.compare(unhashed, hashed);
};

export const userRoute = express.Router();

userRoute.use(express.json());

userRoute.post("/login", async (req, res) => {
  const [username, password] = [req.body.username, req.body.password];

  //check username matches in the db and fetch use

  const userData = await getData({
    table: "users",
    column: "username",
    query: username,
  });
  if (userData) {
    (await comparePassword(password, userData[0].password))
      ? res.json(userData[0])
      : res.send("incorrect details");
  }
});

userRoute.post("/new", async (req, res) => {
  const userData = {
    username: req.body.username,
    password: await hashPassword(req.body.password),
    name: req.body.name,
    contact: req.body.contact,
    club: req.body.club,
    role: req.body.role,
  };

  //send userData to the db
  const response = postData(userData);
  res.send(response);
});

userRoute.post("/update", (req, res) => {
  //do the db stuff somewhere else

  res.send("success");
});

userRoute.delete("/delete", (req, res) => {
  //delete stuff from db

  res.send("successfully removed account");
});
