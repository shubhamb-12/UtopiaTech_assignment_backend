import express from "express";
import bodyparser from "body-parser";
import dotenv from "dotenv";
import dbConnect from "./dbConnect";
import userRoutes from "./routes/userRoutes";
import tokenRoutes from "./routes/tokenRoutes";

const app = express();

app.use(bodyparser.json());

dotenv.config();

// Connect to database
dbConnect();

app.use("/users", userRoutes);
app.use("/token", tokenRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server listening on port", port);
});
