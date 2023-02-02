import { Router } from "express";
import { DALLEController } from "../controller/dalle.controller.js";

const router = Router();


router.get("/", (req, res) => {
    res.json({
        status: 'success',
        statusCode: res.statusCode,
        message: '0xCanvas | DALL·E API'
    })
});

router.post('/', DALLEController.createImage);


export default router;