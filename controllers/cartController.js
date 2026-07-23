const Cart = require("../models/Cart");
const Product = require("../models/product");

const createCart = async (req, res) => {
  try {
    const cart = await Cart.create({ items: [] });

    res.status(201).json(cart);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const getCartById = async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id).populate("items.product");

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart not found",
      });
    }

    res.status(200).json(cart);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
const addItemToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    const cart = await Cart.findById(req.params.id);

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart not found",
      });
    }

    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    cart.items.push({
      product: productId,
      quantity,
    });

    await cart.save();

    res.status(200).json(cart);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
module.exports = {
  createCart,
  getCartById,
  addItemToCart
};