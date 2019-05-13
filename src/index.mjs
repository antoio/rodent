import express from 'express';
import router from './routes/person.mjs';
import path from 'path';
import { fileURLToPath } from 'url';

let app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use((req, res, next) => {
    console.log(`${new Date().toString()} => ${req.originalUrl}`);
    next();
});
app.use(router);
app.use(express.static('public'));

// Handler for 404 - Resource not found
app.use((req, res, next) => {
    res.status(404).send('Where do you think you\'re going?');
});

// Handler for 500
app.use((err, req, res, next) => {
    console.error(err.stack);
    console.log(process.cwd());

    res.sendFile(path.join(__dirname, '../public/500.html'));
});

const PORT = process.env.PORT || 4200;
app.listen(PORT, () => console.info(`Server has started on ${PORT}`));