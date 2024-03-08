require('express-async-errors')

import {Response, Request , NextFunction,} from 'express'
import express from 'express'
import cors from 'cors'
import router from './routes'
import AppError from './utils/App.Error'

const app = express()
app.use(express.json())
app.use(cors())
app.use(router)

app.use((error: Error,req: Request,res: Response, next: NextFunction) => {
    // Para erro do lado do cliente
    if(error instanceof AppError){
        return res.status(error.statusCode).json({
            Status: 'Error',
            message: error.message
        })
    }

    // Para erro interno na parte do servidor
    return res.status(500).json({
        Status: 'Error',
        message: "Internal server error"
    })
})

const PORT = 3333;

app.listen(PORT, () => console.log(`Server rodando na PORTA ${PORT}`))