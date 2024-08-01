import { messages } from "../common/messages";
import { sendErrorResponse, sendSuccessResponse } from "../common/resHandler";
import { UserSchemaValidate } from "../models/user";
import { userServices } from "../services/user.service";
import { Request, Response } from "express";

class userController {
  addUser = async (req: Request, res: Response) => {
    try {
      const userData = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
      };

      const verifyDuplicateUser = await userServices.getUserByEmail(
        req.body?.email
      );

      if (verifyDuplicateUser) {
        sendErrorResponse(res, 409, messages.error.duplicate_email);
        return;
      }

      const { error, data } = UserSchemaValidate.safeParse(userData);

      if (error) {
        sendErrorResponse(res, 500, error.message);
      } else {
        const user = await userServices.createUser(data);
        sendSuccessResponse(res, 201, { user });
      }
    } catch (error: any) {
      sendErrorResponse(res, 500, error.message);
    }
  };

  getAllUsers = async (req: Request, res: Response) => {
    try {
      const users = await userServices.getUsers();
      sendSuccessResponse(res, 200, users);
    } catch (error: any) {
      sendErrorResponse(res, 500, error.message);
    }
  };

  getUser = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const user = await userServices.getUser(id);
      sendSuccessResponse(res, 200, user);
    } catch (error: any) {
      sendErrorResponse(res, 500, error.message);
    }
  };
}

export const UserController = new userController();
