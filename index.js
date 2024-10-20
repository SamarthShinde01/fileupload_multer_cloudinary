import express from "express";
import dotenv from "dotenv";
dotenv.config();
import uploadRouter from "./controllers/routerUpload.js";

const app = express();
const PORT = process.env.PORT;

//the route
app.use("/api/users", uploadRouter);

app.listen(PORT, () => console.log("server is running on PORT: " + PORT));
