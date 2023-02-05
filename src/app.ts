import express from 'express';
import ErrorHandler from './Middlewares/ErrorMiddleware';
import router from './Routes';

const app = express();

app.use(express.json());
app.use(router);
app.use(ErrorHandler.handleError);

export default app;

// dd