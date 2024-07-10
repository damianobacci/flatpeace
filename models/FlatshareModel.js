import mongoose from "mongoose";

const FlatshareSchema = new mongoose.Schema(
  {
    name: String,
    members: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Flatshare", FlatshareSchema);
