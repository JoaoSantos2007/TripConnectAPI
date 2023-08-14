import NotFoundError from '../errors/NotFoundError.js';

function NotFoundMiddleware(req, res, next) {
  const error404 = new NotFoundError('Rota não encontrada');
  next(error404);
}

export default NotFoundMiddleware;
