import 'dotenv/config';
import express from 'express';
import appRouter from './router';

const app = express();
const APP_PORT = process.env.APP_PORT || 3000;

app.use(express.json());
app.use(appRouter);

app.listen(
  APP_PORT,
  () => console.log(`Api is running at port ${APP_PORT}`),
);