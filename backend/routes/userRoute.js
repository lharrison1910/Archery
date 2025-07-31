import express from "express";
import bycrypt from "bcrypt";
import { deleteData, getData, postData } from "../modules/db.js";

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

  const userData = await getData({
    table: "users",
    column: "username",
    query: username,
  });

  if (userData.length > 0) {
    await comparePassword(password, userData[0].password);
    console.log(userData[0])
      ? res.json(userData[0])
      : console.log("incorrect details");
    res.send("incorrect details");
  } else {
    console.log("incorrect details");
    res.send("incorrect details");
  }
});

userRoute.post("/new", async (req, res) => {
  const userData = {
    username: req.body.username,
    password: await hashPassword(req.body.password),
    name: req.body.name,
    club: req.body.club,
    role: req.body.role,
  };

  //send userData to the db
  const response = postData({ table: "users", userData });
  console.log(response);
  res.send(response);
});

userRoute.post("/update", async (req, res) => {
  //do the db stuff somewhere else
  const userData = {
    username: req.body.username,
    password: await hashPassword(req.body.password),
    name: req.body.name,
    club: req.body.club,
    role: req.body.role,
  };

  res.send("success");
});

userRoute.delete("/delete", (req, res) => {
  //delete stuff from db
  try {
    const response = deleteData(req.body.id);
    console.log(response);
    res.send(response);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});
