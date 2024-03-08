import {Router} from 'express'

const SessionsController = require('../controllers/sessions.controller')

const sessionsRoutes = Router()

const sessionsController = new SessionsController()

sessionsRoutes.post('/', sessionsController.create) 

export default sessionsRoutes