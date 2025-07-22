import express from "express";
import cors from "cors";
import { userRoute } from "./routes/user.js";
import { dbRoute } from "./routes/db.js";

const app = express();
const PORT = 3000;

app.use(cors());

//user routes
app.use("/user", userRoute);

app.use("/score", dbRoute);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
