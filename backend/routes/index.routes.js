import { Router } from "express";
import dalleRoutes from "./dalle.routes.js";
import postRoutes from "./post.routes.js";

const router = Router();


router.get("/", (req, res) => {
    res.json({
        status: 'success',
        statusCode: res.statusCode,
        message: '0xCanvas API is running 🔥'
    })
});

router.use('/post', postRoutes);
router.use('/dalle', dalleRoutes);


export default router;