import mongoose, { Schema } from "mongoose";

const likeSchema = new Schema(
  {
    video: {
      type: Schema.Types.ObjectId,
      ref: "Video",
    },
    comment: {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
    communityPost: {
      type: Schema.Types.ObjectId,
      ref: "Communitypost",
    },
  },
  { timestamps: true },
);

export const likeModel = mongoose.model("Like", likeSchema);
