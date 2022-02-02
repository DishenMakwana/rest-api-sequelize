import express from 'express';
import todoRouter from './route';

const app = express();

app.use(express.json());

app.use('/api', todoRouter);

export default app;
