import { IUser } from "../../../interface/user";
import { z, ZodType } from "zod";


export const UserSchema: ZodType<IUser> = z
  .object({
    email: z.string({message:'include valid email'}).email(),
    lastName: z
    .string()
    .max(100, { message: "Last Name is too long" }),
    firstName: z
      .string(({message:'First Name is required'})).min(1, { message: "Last Name is too short" }).max(100, "First name should be less than 100 characters")
      .refine((value)=>
        /^[a-zA-Z]+$/.test(value),
        "First name should contain only alphabetical characters"
      ),
  })
  

export const intitialValues : IUser = {
    firstName:'',
    lastName:'',
    email:''
}

