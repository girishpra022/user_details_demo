import { Schema, model } from "mongoose";
import { z } from "zod";

const collectionName = process.env.collectionName;

export const UserSchemaValidate =  z
.object({
  email: z.string({message:'Email should be valid'}).email(),
  lastName: z
  .string()
  .max(100, { message: "Last Name is too long" }),
  firstName: z
    .string(({message:'First Name is required'})).min(1, { message: "First Name is too short" }).max(100, "First name should be less than 100 characters")
    .refine((value)=>
      /^[a-zA-Z]+$/.test(value),
      "First name should contain only alphabetical characters"
    ),
})

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
}

const userSchema = new Schema<IUser>(
  {
    firstName: {
      type: String,
      required: true,
    },

    lastName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },
  },
  { collection: collectionName }
);

//creating a model
export const User = model<IUser>("User", userSchema);
