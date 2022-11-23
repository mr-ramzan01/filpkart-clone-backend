import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema(
  {
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    itemName: {
      type: String,
      required: true,
    },
    itemId: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    price: {
      type: Number,
      required: true
    },
    quantity: {
        type: Number,
        default: 1,
    }
  },
  {
    timestamps: true,
  }
);
const cartItemModel = mongoose.model("cartItem", cartItemSchema);

export default cartItemModel;
