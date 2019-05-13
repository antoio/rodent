import express from 'express';
import router from './routes/person.mjs';

let app = express();

app.use(router);
app.use(express.static('public'));

const PORT = process.env.PORT || 4200;
app.listen(PORT, () => console.info(`Server has started on ${PORT}`));