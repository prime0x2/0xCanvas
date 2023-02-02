import { Router } from 'express';
import { PostController } from '../controller/post.controller.js';

const router = Router();

router.get('/', PostController.getAllPosts);
router.get('/:id', PostController.getPostById);
router.post('/', PostController.createPost);


export default router;