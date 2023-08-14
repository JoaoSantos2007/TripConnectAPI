import express from 'express';
import Routes from './routes/index.js';

const app = express();
Routes(app);

export default app;
