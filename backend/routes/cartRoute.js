import express from "express";
import { addCart, getCartAll, updateCart } from "../controllers/cartControllers.js";

const route = express.Router();

route.get("/cart", getCartAll);
route.post("/cart", addCart);
route.patch("/cart/:id", updateCart);

export default route;
