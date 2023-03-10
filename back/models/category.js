
import mongoose from "mongoose";

const { model } = mongoose;

const CategorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    site: { type: String, required: true }
});

export const CategoryModel = model("category", CategorySchema);
