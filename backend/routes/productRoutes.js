const Product = require('../models/productModel');
// const {auth,isUser,isAdmin}=require('../middleware/authMiddleware');
const cloudinary = require('../utils/cloudinary');
const router = require('express').Router();

// Create Product
router.post('/', async (req, res) => {
  const { name, product, desc, price, image } = req.body;

  // upload image to cloudinary
  try {
    if (image) {
      const uploadResponse = await cloudinary.uploader.upload(image, {
        upload_preset: "online_shop"
      });

      if (uploadResponse) {
        const product = new Product({
          name,
          product,
          price,
          desc,
          image: uploadResponse,
        });
        const savedProduct = await product.save();
        res.status(200).json(savedProduct);
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// Delete Product
router.delete('/:id',async(req,res)=>{
  try {
    res.status(200).json()
  } catch (error) {
    res.status(500).json(error)
  }
});

// Get All Product
router.get('/',async(req,res)=>{
  try {
    const product= await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get Product
// Update Product

module.exports = router;