const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
app.use(cors()); // Enable CORS
app.use(express.json());
app.post('/', (req, res) => {
    const { url } = req.body
    const shortUrl = Math.random().toString(36).substr(2, 5)
    res.status(200).send({ url, shortUrl })
})

//Habilitar puerto
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});