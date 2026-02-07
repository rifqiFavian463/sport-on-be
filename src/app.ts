import express from "express";
import cors from "cors";
import type { Express } from "express";
import authRoutes from "./routes/auth.routes.ts";
import categoryRoutes from "./routes/category.routes.ts";
import productRoutes from "./routes/product.routes.ts";
import bankRoutes from "./routes/bank.routes.ts";
import transactionRoutes from "./routes/transaction.routes.ts";
import path from "node:path";

const app: Express = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use("/uploads", express.static(path.resolve(process.cwd(), "uploads")));

app.use("/api/auth", authRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);
app.use("/api/banks", bankRoutes);
app.use("/api/transactions", transactionRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
