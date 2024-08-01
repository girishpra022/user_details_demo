import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();


const username = process.env.monogo_username;
const password = process.env.password;
const dbName = process.env.dbName;

console.log('username', username)


const connectionString = `mongodb+srv://${username}:${password}@usercluster.jkb8ust.mongodb.net/userDB?retryWrites=true&w=majority&appName=userCluster`;

const options = {
  autoIndex: false, 
  maxPoolSize: 10, 
  serverSelectionTimeoutMS: 5000, 
  socketTimeoutMS: 45000, 
  family: 4, 
};


export const db = mongoose
  .connect(connectionString, options)
  .then((res) => {
    if (res) {
      console.log(`Database connection succeffully to ${dbName}`);
    }
  })
  .catch((err) => {
    console.log(err);
  });
