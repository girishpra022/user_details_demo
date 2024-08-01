export interface IMessages {
    httpCode: {
      [key: number]: string;
    };
    error: {
      [key: string]: string;
    };
  }

  export interface IErrorResponseBody {
    success: boolean;
    message: string | string[];
  }