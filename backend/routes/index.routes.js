import { Router } from "express";
import dalleRoutes from "./dalle.routes.js";

const router = Router();


router.get("/", (req, res) => {
    res.json({
        status: 'success',
        statusCode: res.statusCode,
        message: '0xCanvas API is running 🔥'
    })
});

router.use('/dalle', dalleRoutes);


export default router;