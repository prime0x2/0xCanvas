import { PostModel } from "../schema/post.schema.js";
import { v2 as cloudinary } from "cloudinary";


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});


export class PostService {

    /*---------------- get all posts ----------------*/

    static async getAllPosts() {
        return await PostModel.find({});
    }


    /*---------------- get post by id ----------------*/

    static async getPostById(id) {
        return await PostModel.findById(id);
    }


    /*---------------- create post ----------------*/

    static async createPost(body) {
        const { name, prompt, photo } = body;

        if (!name || !prompt || !photo) {
            throw new Error("Please fill in all fields.");
        }

        const photoUrl = await cloudinary.uploader.upload(photo);

        const newPost = new PostModel({
            name,
            prompt,
            photo: photoUrl.url,
        });

        await newPost.save();

        return newPost;
    }
}