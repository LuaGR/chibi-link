const express = require('express')
const cors = require('cors')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const app = express()
const port = 3000
app.use(cors());
app.use(express.json());

app.post('/', async (req, res) => {
    const { url } = req.body
    const shortUrl = Math.random().toString(36).substr(2, 5)

    try {
        const data = await prisma.link.create({
            data: { url, shortUrl }
        })
        return res.status(200).send(data)
    }

    catch (error) {
        return res.status(500).send({ error })
    }

})

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
    console.log(`Listening server on http://localhost:${port}`);
});