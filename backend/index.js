import express from 'express';
import cors from 'cors';
import prisma from './prismaClient.js';
import { corsHeaders } from './_shared/cors.ts';

const app = express();
const port = process.env.PORT ?? 3000;


app.use(cors({
    corsHeaders
}));

app.use(express.json());

app.use((req, res, next) => {
    res.setTimeout(5000, () => {
        console.log('Request has timed out.');
        res.status(503).send('Server is busy, please try again later.');
    });
    next();
});

app.post('/', async (req, res) => {
    const { url } = req.body;
    const shortUrl = Math.random().toString(36).substr(2, 5);

    try {

        const existingLink = await prisma.link.findUnique({
            where: { url }
        });

        if (existingLink) {
            return res.status(200).json(existingLink);
        }


        const data = await prisma.link.create({
            data: { url, shortUrl }
        });

        return res.status(201).json(data);
    } catch (error) {
        console.error('Error creating URL:', error);

        if (error instanceof prisma.PrismaClientKnownRequestError) {
            return res.status(400).json({ error: 'Known request error', details: error.message });
        } else {
            return res.status(500).json({ error: 'Internal server error' });
        }
    }
});


app.get('/:shortId', async (req, res) => {
    const { shortId } = req.params;

    try {

        const data = await prisma.link.findUnique({
            where: { shortUrl: shortId },
        });


        if (!data) {
            return res.status(404).json({ error: 'URL not found' });
        }


        return res.redirect(302, data.url);
    } catch (error) {
        console.error('Error fetching URL:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
