import {Router} from 'express'
import categoryController from '../controllers/categoryController.js'
import bodyParser from 'body-parser'
const ca=Router()
ca.use(bodyParser.json())
ca.get('/getAll',categoryController.getAll);
ca.post('/add',categoryController.add)
ca.put('/update/:id',categoryController.update)
ca.delete('/delete/:id',categoryController.delete)
export default ca;