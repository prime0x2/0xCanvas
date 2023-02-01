import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        prompt: {
            type: String,
            required: true,
            trim: true,
        },
        photo: {
            type: String,
            required: true,
            trim: true,
        }
    },
    {
        timestamps: true,
    }
);

export const PostModel = mongoose.model("Post", postSchema);