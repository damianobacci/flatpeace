import mongoose from "mongoose";

const SplitSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  amount: { type: Number, required: true },
});

const BillSchema = new mongoose.Schema(
  {
    flatshare_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Flatshare",
      required: true,
    },
    description: { type: String, required: true },
    total_amount: { type: Number, required: true },
    splits: [SplitSchema],
  },
  { timestamps: true }
);

export default mongoose.model("Bill", BillSchema);
