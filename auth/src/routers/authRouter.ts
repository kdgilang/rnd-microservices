import { Router } from 'express'
const { checkSchema } = require('express-validator');
import authGetController from '../controllers/authGetController'
import authPostController from '../controllers/authPostController'
import authValidation from '../validations/authValidation'

const router = Router()

router.get('/', authGetController)

router.post('/', checkSchema(authValidation), authPostController)

export default router