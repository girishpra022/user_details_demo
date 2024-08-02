import { IUser } from "../../../interface/user";
import { z, ZodType } from "zod";

export const UserSchema: ZodType<IUser> = z.object({
  email: z
    .string({ message: "Email is required" })
    .email({ message: "Please enter valid email" })
    .refine((value) => !!value, { message: "Email is required" }), // Prioritize required message
  lastName: z
    .string({ message: "Last Name is required" })
    .max(100, { message: "Last Name is too long" })
    .refine(
      (value) => /^[a-zA-Z]+$/.test(value),
      "Last name should contain only alphabetical characters"
    )
    .refine((value) => !!value, { message: "Last Name is required" }), // Prioritize required message
  firstName: z
    .string({ message: "First Name is required" })
    .min(1, { message: "First Name is too short" })
    .max(100, "First name should be less than 100 characters")
    .refine(
      (value) => /^[a-zA-Z]+$/.test(value),
      "First name should contain only alphabetical characters"
    )
    .refine((value) => !!value, { message: "First Name is required" }), // Prioritize required message
});

export const intitialValues: IUser = {
  firstName: "",
  lastName: "",
  email: "",
};
