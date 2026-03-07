import express from "express";
import {router as index} from "../controller/index.js";       

export const app = express();

//app.use("/api", require("./routes/api"));
app.use("/", index);
app.use((req, res) => {
    res.status(404).json({ error: "Not found" });
});
