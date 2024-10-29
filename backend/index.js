import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();
const port = process.env.PORT || 3000;


app.use(cors({
    origin: 'https://chibi-link.vercel.app',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
    credentials: true
}));

app.use(express.json());

app.get('/test', (req, res) => {
    res.send('Server is working!');
});

app.post('/api/', async (req, res) => {
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
        return res.status(500).json({ error: 'Error creating URL' });
    }
});


app.get('/api/:shortId', async (req, res) => {
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
