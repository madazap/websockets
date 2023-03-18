import { Router } from "express";
import { json } from "express";
import ProductManager from "../productManager";

const viewsRouter = Router();
const products = new ProductManager();
viewsRouter.use(json());


viewsRouter.get("/", (req, res) => {
  const all_prods = products.getProducts();
  res.render("home", all_prods);
});


export default viewsRouter;
