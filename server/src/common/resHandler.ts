import { IErrorResponseBody } from "../types";
import { messages } from "./messages";
import { Response } from "express";

export function sendSuccessResponse(
    res: Response,
    statusCode: number,
    data: any,
    message: string = ""
  ) {
    const responseMessage = message ? message : messages.httpCode[statusCode];
    const jsonBody = {
      success: statusCode >= 200 && statusCode < 300,
      message: responseMessage,
      data: data || "",
    };
  
    res.status(statusCode).json(jsonBody);
  }

export function sendErrorResponse(
    res: Response,
    statusCode: number,
    message: string | string[] = ""
  ) {
    const responseMessage = message ? message : messages.httpCode[statusCode];
  
    const jsonBody: IErrorResponseBody = {
      success: false,
      message: responseMessage,
    };
  
    if (Array.isArray(message) && message.length > 0) {
      jsonBody.message = message;
    }
  
    res.status(statusCode).json(jsonBody);
  }