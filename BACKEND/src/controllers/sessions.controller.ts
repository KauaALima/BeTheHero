import {Request , Response} from 'express'

import knex from '../database';
import AppError from '../utils/App.Error';

class SessionsController {
    async create(req: Request, res: Response){
        const {id} = req.body;

        const ong = await knex('ongs').where('id', id).select('name').first()

        if(!ong){
            throw new AppError('Ong não encontrada')
        }

        return res.json(ong)
    }
}

module.exports = SessionsController