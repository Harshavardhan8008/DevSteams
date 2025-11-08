import express from 'express';
import { healthRouter } from './routes/health.routes.js';
// express() call will give us  app
const app = express();
app.use('/health', healthRouter);

export default app;
