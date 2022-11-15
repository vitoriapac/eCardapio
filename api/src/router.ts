import { Router } from "express";

import { createCategory } from "./app/useCases/categories/createCategory";
import { listCategories } from "./app/useCases/categories/listCategories";

export const router = Router();

//List category
router.get("/categories", listCategories);

//Create category
router.post("/categories", createCategory);

//List products
router.get("/products", (req, res) => {
  res.send("🆗 List Products");
});

//create products
router.post("/products", (req, res) => {
  res.send("🆗 Create Products");
});

//Get products by category
router.get("/categories/:categoryId/products", (req, res) => {
  res.send("🆗 List Products");
});

//List orders
router.get("/orders", (req, res) => {
  res.send("🆗 List Orders");
});

//Create orders
router.post("/orders", (req, res) => {
  res.send("🆗 Create Orders");
});

//Change order status
router.patch("/orders/:orderId", (req, res) => {
  res.send("🆗 Change Order Status");
});

//Delete/cancel order
router.delete("/orders/:orderId", (req, res) => {
  res.send("🆗 Cancel Order");
});
