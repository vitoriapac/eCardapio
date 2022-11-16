import path from "node:path";

import { Router } from "express";
import multer from "multer";

import { createCategory } from "./app/useCases/categories/createCategory";
import { listCategories } from "./app/useCases/categories/listCategories";
import { createProduct } from "./app/useCases/products/createProduct";
import { listProducts } from "./app/useCases/products/listProducts";

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, "../", "uploads"));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

//List category
router.get("/categories", listCategories);

//Create category
router.post("/categories", createCategory);

//List products
router.get("/products", listProducts);

//create products
router.post("/products", upload.single("image"), createProduct);

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
