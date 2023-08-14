import { Router } from 'express';
import TestimonialController from '../controllers/TestimonialController.js';

const router = Router();

router
  .get('/depoimentos', TestimonialController.readTestimonials)
  .get('/depoimentos-home', TestimonialController.readLatestTestimonials)
  .get('/depoimentos/latest', TestimonialController.readLatestTestimonials)
  .get('/depoimentos/:id', TestimonialController.readOneTestimonial)
  .post('/depoimentos', TestimonialController.createTestimonial)
  .put('/depoimentos/:id', TestimonialController.updateTestimonial)
  .delete('/depoimentos/:id', TestimonialController.deleteTestimonial);

export default router;
