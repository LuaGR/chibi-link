const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const express = require('express')
const cors = require('cors')

const app = express()
const port = 3000
app.use(cors()); // Enable CORS
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

//Habilitar puerto
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});