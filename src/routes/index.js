import express from 'express';
import testimonial from './testimonialRoutes.js';
import destiny from './destinyRoutes.js';
import errorMiddleware from '../middlewares/errorMiddleware.js';
import NotFoundMiddleware from '../middlewares/notFoundMiddleware.js';

export default (app) => {
  app.get('/', (req, res) => {
    res.status(200).json('TripConnectAPI is working!');
  });
  app.use((req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Headers', '*');
    res.set('Access-Control-Allow-Methods', '*');
    res.set('Access-Control-Allow-Credentials', true);
    next();
  });

  app.use(
    express.json(),
    testimonial,
    destiny,
    NotFoundMiddleware,
    errorMiddleware,
  );
};
