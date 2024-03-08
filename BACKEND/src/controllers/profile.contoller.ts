import {Request , Response} from 'express'

import knex from '../database';

class ProfileController {
    async index(req: Request, res: Response){
        const ong_id = req.headers.authorization;

        const incidents = await knex('incidents').where('ong_id', ong_id).select('*')


        return res.json(incidents)
    }
}

module.exports = ProfileController