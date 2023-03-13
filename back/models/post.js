
import mongoose from "mongoose";

const { Schema, model } = mongoose;

const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    images: { type: String, required: true },
    createdDate: { type: Date, default: Date.now },
    snaps: { type: String },
    location: { type: String },
    fichier: { type: String },
    likes: { type: Number, default: 0 },
    site: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'category' },
});

export const PostModel = model("posts", postSchema);
