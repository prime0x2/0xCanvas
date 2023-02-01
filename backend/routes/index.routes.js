import { Router } from "express";

const router = Router();


router.get("/", (req, res) => {
    res.json({
        status: 'success',
        statusCode: res.statusCode,
        message: '0xCanvas API is running 🔥'
    })
});

export default router;