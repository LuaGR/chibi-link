import cors from 'cors';

const ACCEPTED_ORIGINS = ['https://chibi-link.vercel.app', 'http://localhost:4200'];

export const corsOptions = {
    origin: (origin, callback) => {
        if (ACCEPTED_ORIGINS.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
};

export const corsMiddleware = cors(corsOptions);
