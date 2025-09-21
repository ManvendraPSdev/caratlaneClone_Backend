import mongoose from 'mongoose';
const productSchema = new mongoose.Schema(
  {
    price: {
      type: Number,
      required: true,
    },
    productName: {
      type: String,
      required: true,
      unique: true, // automatically indexed
      trim: true,
    },
    productDetails: {
      type: String,
      required: true,
      trim: true,
    },
    productImages: {
      type: [String],   // array of Cloudinary URLs
      maxlength: 4,     // max 4 images allowed
      required: true,
    } ,
  },
  { timestamps: true } // optional but very useful
);

export const Product = mongoose.model("Product", productSchema);
