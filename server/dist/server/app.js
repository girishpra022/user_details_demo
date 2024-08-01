import express from 'express';
import { db } from '../config/db.config.js';
const app = express();
//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//routes
//app.use('/api/v1/users', router)
//db connection then server connection
db.then(() => {
    app.listen(4000, () => console.log('Server is running on port 400'));
});
