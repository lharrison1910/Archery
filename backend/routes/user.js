import express from "express";

export const userRoute = express.Router();

userRoute.use(express.json());

userRoute.get("/login", (req, res) => {
  console.log("login");
  res.send("success");
});

userRoute.post("/new", (req, res) => {
  const userData = {
    username: req.body.username,
    name: req.body.name,
    contactNo: req.body.contactNo,
    club: req.body.club,
    role: req.body.role,
  };

  //send userData to the db
  console.log(userData);
  res.send(userData);
});

userRoute.post("/update", (req, res) => {
  //do the db stuff somewhere else

  res.send("success");
});

userRoute.delete("/delete", (req, res) => {
  //delete stuff from db

  res.send("successfully removed account");
});
