class ApiResponse {
  constructor(statusCode, data, message = "suscess") {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.suscess = statusCode;
  }
}

export { ApiResponse };
