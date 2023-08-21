import { Router } from "express";
import { prisma } from "../db.js";

const router = new Router();

router.get("/products", async (req, res) => {
  const products = await prisma.product.findMany();
  res.json(products);
});

router.get("/products/:id", async (req, res) => {
  const product = await prisma.product.findFirst({
    where: {
      id: +req.params.id,
    },
    include: {
      category: true,
    },
  });

  if (!product) return res.status(404).json({ error: "Product not found" });

  res.json(product);
});

router.delete("/products/:id", async (req, res) => {
  const product = await prisma.product.delete({
    where: {
      id: +req.params.id,
    },
  });

  res.json(product);
});

router.put("/products/:id", async (req, res) => {
  const productUpdate = await prisma.product.update({
    where: {
      id: +req.params.id,
    },
    data: req.body,
  });

  res.json(productUpdate);
});

router.post("/products", async (req, res) => {
  const newProduct = await prisma.product.create({
    data: req.body,
  });

  res.json(newProduct);
});

export default router;
