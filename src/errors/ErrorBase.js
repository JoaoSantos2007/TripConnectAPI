class ErrorBase extends Error {
  constructor(message = 'Erro Interno do Servidor', statusCode = 500) {
    super();
    this.message = message;
    this.status = statusCode;
  }

  send(res) {
    res.status(this.status).json({
      success: false,
      message: this.message,
      status: this.status,
    });
  }
}

export default ErrorBase;
