import ErrorBase from './ErrorBase.js';

class NotFoundError extends ErrorBase {
  constructor(message = 'item not found', statusCode = 404) {
    super(message, statusCode);
  }
}

export default NotFoundError;
