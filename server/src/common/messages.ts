import { IMessages } from "../types";

export const messages: IMessages = {
  httpCode: {
    500: "Internal server error",
    400: "Bad request",
    409: "Duplicate record found.",
    200: "Data loaded successfully",
    201: "Data saved successfully.",
  },
  error: {
    duplicate_email: "Email address is already registered.",
    user_not_found: "No matching user found",
  },
};
