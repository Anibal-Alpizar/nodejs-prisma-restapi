import express from "express";
import productsRoutes from "./routes/products.routes.js";
import categoriesRoutes from "./routes/categories.routes.js";

const app = new express();

app.use(express.json());

app.use("/api", productsRoutes);
app.use("/api", categoriesRoutes);

app.listen(3000, () => {
  console.log("server listening on port", 3000);
});
