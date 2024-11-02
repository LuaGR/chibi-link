import express from 'express';
import { corsMiddleware } from './src/middlewares/cors.js';
import routes from './src/routes/url.js'

const app = express();
const port = process.env.PORT ?? 3000;

app.use(express.json());
app.use(corsMiddleware);
app.disable('x-powered-by')

app.use((req, res, next) => {
    res.setTimeout(5000, () => {
        console.log('Request has timed out.');
        res.status(503).send('Server is busy, please try again later.');
    });
    next();
});

app.use('/', routes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
