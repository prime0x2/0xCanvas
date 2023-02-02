import { DALLEService } from "../services/dalle.service.js";

export class DALLEController {

    /*------------- create image ---------------*/

    static async createImage(req, res, next) {
        try {
            const image = await DALLEService.createImage(req.body);

            res.json({
                success: true,
                status: res.statusCode,
                message: 'Image created successfully',
                image: image
            });
        } catch (err) {
            console.log('🚨 Error creating image\n', err);
            next(err);
        }
    }
}