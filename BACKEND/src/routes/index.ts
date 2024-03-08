import {Router} from 'express'

import OngRouter from './ong.routes'
import IncidentsRouter from './incidents.routes'
import ProfileController from './profile.routes'
import SessionsController from './sessions.routes'

const routes = Router()

routes.use('/ongs', OngRouter)
routes.use('/incidents', IncidentsRouter)
routes.use('/profile', ProfileController)
routes.use('/sessions', SessionsController)

export default routes