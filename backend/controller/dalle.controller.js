import { DALLEService } from "../services/dalle.service.js";

export class DALLEController {

    /*------------- create image ---------------*/

    static async createImage(req, res, next) {
        try {
            const image = await DALLEService.createImage(req.body);

            res.json({
                status: 'success',
                statusCode: res.statusCode,
                message: 'Image created successfully',
                data: image
            });
        } catch (error) {
            next(error);
        }
    }
}