import {Request , Response} from 'express'

import crypto from 'crypto'
import knex from '../database'
import AppError from '../utils/App.Error'

class OngController {
    async create(req: Request, res: Response){
        const {name, email , whatsapp , cidade, uf} = req.body

        const id = crypto.randomBytes(4).toString('hex')

        const checkOng = await knex('ongs').where({email}).first()

        if(checkOng){
            throw new AppError('Ong ja exite')
        }
        
        if(uf.length >= 3){
            throw new AppError('Apenas dois digitos')
        }

        await knex('ongs')
        .insert({
            id,
            name,
            email,
            whatsapp,
            cidade,
            uf
        })

        return res.json({id})
   }

   async index(req: Request, res: Response){
     const ongs = await knex('ongs').select('*')

     return res.json(ongs)
   }
}

module.exports = OngController