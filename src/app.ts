import express from "express";
import cors from "cors";
import type { Express } from "express";
import authRoutes from "./routes/auth.routes.ts";

const app: Express = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
