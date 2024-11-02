import express from 'express';
import cors from 'cors'
import routes from './src/routes/url.js'

const app = express();
const port = process.env.PORT ?? 3000;

app.use(express.json());
app.use(cors({
    origin: (origin, callback) => {
        const ACCEPTED_ORIGINS = ['https://chibi-link.vercel.app', 'http://localhost:4200']

        if (ACCEPTED_ORIGINS.includes(origin)) {
            return callback(null, true)
        }

        if (!origin) {
            return callback(null, true)
        }

        return callback(new Error('Not allowed by CORS'))
    }
}));
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
