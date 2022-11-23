import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema(
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
    quantity: {
        type: Number,
        default: 1,
    }
  },
  {
    timestamps: true,
  }
);
const orderItemModel = mongoose.model("orderItem", orderItemSchema);

export default orderItemModel;
