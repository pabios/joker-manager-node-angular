import { connectToMongo } from "../Models/db.js";
import {PostModel} from "../models/post.js";
import mongoose from "mongoose";

connectToMongo().then(r => r);

export async function getAllPosts() {
    const posts = await  PostModel.find();
    return posts;
}

export async function add_post(req,res){
    try {
        const { title, description, images, snaps, location, fichier,site,author,category } = req.body;

        const authorObjectId = mongoose.Types.ObjectId(author);
        const categoryObjectId = mongoose.Types.ObjectId(category);

        const newPost = new PostModel({
            title,
            description,
            images: images.map(image => image.name), // envois un tableau d'images
            snaps,
            location,
            fichier,
            site,
            author: authorObjectId,
            category:categoryObjectId
        });

         newPost.save();

        return res.status(201).json({
            success: true,
            message: 'Post created successfully',
            post: newPost,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: 'Could not create post',
        });
    }
}

export async function like_post(req){
    const postId = req.params.id;

    const post = await PostModel.findById(postId);
    if (!post) {
        return false;
    }
    post.likes += 1;
    await post.save();
    return post;
}

export async function edit_post(req){
    const postId = req.params.id;
    const { title, description, imageUrl, snaps, location, fichier } = req.body;

    const post = await PostModel.findById(postId);
    if (!post) {
        return false;
    }

    post.title = title || post.title;
    post.description = description || post.description;
    post.imageUrl = imageUrl || post.imageUrl;
    post.snaps = snaps || post.snaps;
    post.location = location || post.location;
    post.fichier = fichier || post.fichier;

    await post.save();

    return  post;
}

export async function get_post(req){
    const postId = req.params.id;

    const post = await PostModel.findById(postId);
    if (!post) {
        return false;
    }
    return  post;
}

export async function delete_post(req){
    const postId = req.params.id;

    // Ensure that the post exists
    const post = await PostModel.findById(postId);
    if (!post) {
       return false;
    }

    // Delete the post
    await post.remove();

    return  'Post deleted successfully';
}
