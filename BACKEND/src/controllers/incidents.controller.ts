import {Request , Response} from 'express'


import knex from '../database'
import AppError from '../utils/App.Error'


class IncidentsController {
    async index(req: Request, res: Response){
        const {page = 1} = req.query

        const count = await knex('incidents').count()

        const incidents = await knex('incidents').join('ongs', 'ongs.id', '=' , 'incidents.ong_id').limit(5).offset((Number(page) - 1)* 5).select(['incidents.*', 'ongs.name', 'ongs.email', 'ongs.whatsapp' ,'ongs.cidade', 'ongs.uf'])

        // res.header('X-Total-Count', count['count(*)'])

        return res.json({incidents})
    }

    async create(req: Request, res: Response){
        const {title, description, value} = req.body
        const ong_id = req.headers.authorization;

        const [id] = await knex('incidents').insert({
            title,
            description,
            value,
            ong_id
        })

        return res.json(`Caso criado e o seu id é ${id}`)

    }

    async delete(req: Request, res: Response){
        const {id} = req.params
        const ong_id = req.headers.authorization;

        const incident = await knex('incidents').where('id', id).select
        ('ong_id').first()

        if(incident.ong_id !== ong_id){
            throw new AppError('Operação não permitida')
        }

        await knex('incidents').where('id', id).delete()

        return res.json('Caso deletado').send()

    }
}


module.exports = IncidentsController