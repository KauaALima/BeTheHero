import {Router} from 'express'

const ProfileController = require('../controllers/profile.contoller')

const profileRoutes = Router()

const profileController = new ProfileController()

profileRoutes.get('/', profileController.index) 

export default profileRoutes