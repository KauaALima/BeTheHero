import {Router} from 'express'

const OngController = require('../controllers/ong.controller')

const ongRoutes = Router()

const ongController = new OngController()

ongRoutes.post('/', ongController.create) 
ongRoutes.get('/', ongController.index) 

export default ongRoutes