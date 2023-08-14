import { Router } from 'express';
import DestinyController from '../controllers/DestinyController.js';

const router = Router();

router
  .get('/destinos', DestinyController.readDestinies)
  .get('/destinos/:id', DestinyController.readDestiny)
  .post('/destinos', DestinyController.createDestiny)
  .put('/destinos/:id', DestinyController.updateDestiny)
  .delete('/destinos/:id', DestinyController.deleteDestiny);

export default router;
