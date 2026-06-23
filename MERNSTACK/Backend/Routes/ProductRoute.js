const express = require("express");
const router = express.Router();

const {
  getProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct
} = require("../Controller/ProductController");

router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/addProduct", addProduct)
router.put("/updateProduct/:id", updateProduct);
router.delete("/deleteProduct/:id", deleteProduct);

module.exports = router;