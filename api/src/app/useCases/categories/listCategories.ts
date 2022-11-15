import { Request, Response } from "express";

import { Category } from "../../models/Category";

export async function listCategories(req: Request, res: Response) {
  //res.send("🆗 List Categories");
  const categories = await Category.find();

  res.json(categories);
}
