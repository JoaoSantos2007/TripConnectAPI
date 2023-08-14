import Sequelize from 'sequelize';
import ErrorBase from '../errors/ErrorBase.js';
import ValidationError from '../errors/ValidationError.js';

// eslint-disable-next-line no-unused-vars
function errorMiddleware(error, req, res, next) {
  if (error instanceof ErrorBase) {
    return error.send(res);
  } if (error instanceof Sequelize.ValidationError) {
    return new ValidationError(error).send(res);
  }

  return new ErrorBase().send(res);
}

export default errorMiddleware;
