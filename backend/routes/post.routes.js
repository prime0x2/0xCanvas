import { Router } from 'express';
import { PostController } from '../controller/post.controller.js';

const router = Router();


router.get("/", (req, res) => {
    res.json({
        status: 'success',
        statusCode: res.statusCode,
        message: '0xCanvas | Posts API'
    })
});

router.get('/all', PostController.getAllPosts);
router.get('/post/:id', PostController.getPostById);
router.post('/create', PostController.createPost);


export default router;