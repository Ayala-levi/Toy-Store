import {Router} from 'express'
import clientController from '../controllers/clientController.js'
import bodyParser from 'body-parser'
const cl=Router()
cl.use(bodyParser.json())
cl.get('/getAll',clientController.getAll);
cl.post('/add',clientController.add)
cl.get('/isExist/:name/:password',clientController.isExsist)
cl.get('/idClient/:name/:password',clientController.idClient)
export default cl;