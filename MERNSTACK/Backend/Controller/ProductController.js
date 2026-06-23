const express = require("express");

const Product = require("../Model/ProductModel");

const getProducts = async (req, res) => {
  const products = await Product.find();

  return res.status(200).json(products);
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findOne({
      id: parseInt(req.params.id),
    });

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const addProduct = async (req, res) => {
  const { id, productName, price } = req.body;

  try{
  const product = new Product({
    id,
    productName,
    price,
  });

  const saveProduct = await product.save();

  res.status(201).json({
    success : true,
    message : "product created successfully",
    data : saveProduct
  })
}
catch(err){
  res.status(500).json({
    success : false,
    message : err.message
  })
  console.log(err);
}
};

const updateProduct = async (req, res) => {
  const { id } = req.params;

  try{
    const updatedProduct = await Product.findOneAndUpdate(
      { id : parseInt(id)},
      req.body,
      {
        new : true,
        runValidators : true
      }
    );
    res.status(200).json({
      success : true,
      message : "product updated successfully",
      data : updatedProduct
    })
  }catch(err){
    console.log(err);
    res.status(500).json({
      success : false,
      message : err.message
    })
  }
}

const deleteProduct = async(req,res) => {
  const { id } = req.params;

  try{
   const deletedProduct = await Product.findOneAndDelete({ id : parseInt(id)});
   res.status(200).json({
    success : true,
    message : "product deleted successfully",
    data : deletedProduct
   })

  }catch(err){
    console.log(err.message);
    res.status(500).json({
      success : false,
      message : err.message
    })
  }
}

module.exports = { getProducts, getProductById , addProduct, updateProduct, deleteProduct};
