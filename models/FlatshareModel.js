import mongoose from "mongoose";

const FlatshareSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    admin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    members: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Flatshare", FlatshareSchema);
