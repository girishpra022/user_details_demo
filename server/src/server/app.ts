import express from 'express'
import { db } from '../config/db.config'
import { router } from '../routes/user.routes'
import cors from 'cors';
import helmet from 'helmet';



const app = express()

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(helmet());

//routes
app.use('/api/v1/users', router)


db.then(() => {
    app.listen(4000, () => console.log('Server is listening on port 4000'))
})

export default app
