import { PostService } from "../services/post.service.js";

export class PostController {

    /*---------------- get all posts ----------------*/

    static async getAllPosts(req, res, next) {
        try {
            const posts = await PostService.getAllPosts();

            res.status(200).json({
                status: "success",
                statusCode: res.statusCode,
                data: posts,
            });
        } catch (err) {
            console.log("🚨 Error getting all posts\n", err);
        }
    }


    /*---------------- get post by id ----------------*/

    static async getPostById(req, res, next) {
        try {
            const post = await PostService.getPostById(req.params.id);

            res.status(200).json({
                status: "success",
                statusCode: res.statusCode,
                data: post,
            });
        } catch (err) {
            console.log("🚨 Error getting post by id\n", err);
        }
    }


    /*---------------- create post ----------------*/

    static async createPost(req, res, next) {
        try {
            const newPost = await PostService.createPost(req.body);

            res.status(201).json({
                status: "success",
                statusCode: res.statusCode,
                data: newPost,
            });
        } catch (err) {
            console.log("🚨 Error creating post\n", err);
        }
    }
}