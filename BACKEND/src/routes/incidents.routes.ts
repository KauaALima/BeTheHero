import {Router} from 'express'

const IncidentsController = require('../controllers/incidents.controller')

const incidentsRoutes = Router()

const incidentsController = new IncidentsController()

incidentsRoutes.get('/', incidentsController.index) 
incidentsRoutes.post('/', incidentsController.create) 
incidentsRoutes.delete('/:id', incidentsController.delete) 

export default incidentsRoutes