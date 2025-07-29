import express from "express";
import cors from "cors";
import { userRoute } from "./routes/userRoute.js";
import { scoreRoute } from "./routes/scoreRoute.js";

const app = express();
const PORT = 3000;

app.use(cors());

//user routes
app.use("/user", userRoute);

app.use("/score", scoreRoute);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
