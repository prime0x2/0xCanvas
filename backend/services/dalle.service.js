import { Configuration, OpenAIApi } from 'openai';

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);


export class DALLEService {

    /*------------- create image ---------------*/

    static async createImage(body) {
        const { prompt } = body;

        const aiResponse = await openai.createImage({
            prompt: prompt,
            n: 1,
            size: '1024x1024',
            response_format: 'b64_json',
        })

        const image = aiResponse.data.data[0].b64_json;

        return image;
    }
}