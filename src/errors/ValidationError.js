import ErrorBase from './ErrorBase.js';

class ValidationError extends ErrorBase {
  constructor(error) {
    const errorMsg = error.errors[0].message;
    super(`Os dados fornecidos são inválidos: ${errorMsg}`, 400);
  }
}

export default ValidationError;
