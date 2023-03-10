import { connectToMongo } from "../Models/db.js";
import {CategoryModel} from "../models/category.js";

connectToMongo().then(r => r);

export async function add_category(req,res){
    const { name, site } = req.body;

    if (!name || !site) {
        return res.status(400).json({ error: 'Name and site are required' });
    }

    const newCategory = new CategoryModel({
        name,
        site
    });

    try {
        const savedCategory = await newCategory.save();
        res.status(201).json(savedCategory);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to save category to database' });
    }
}

export async function get_all_category(req,res){
    try {
        const categories = await CategoryModel.find();
        res.json(categories);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
}
