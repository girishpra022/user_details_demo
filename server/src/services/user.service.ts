import { IUser, User } from "../models/user"

 export class userService {
    //create a user
    async createUser(data: IUser) {
        try {
            
            const newuser = await User.create(data)
            return newuser

        } catch (error) {
            console.log(error)
        }
    }

    //get all users
    async getUsers() {
        try {
            const users = await User.find({})
            return users

        } catch (error) {
            console.log(error)
        }
    }


    async getUser(id: string) {
      
        try {
            const user = await User.findById({_id:id})
            if (!user) {
                return 'user not available'
            }
            return user

        } catch (error) {
            console.log(error)
        }
    }

    async getUserByEmail(email: string): Promise<IUser | null> {
        return User.findOne({ email });
      }
}

export const userServices = new userService()