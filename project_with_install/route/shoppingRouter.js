import Router from 'express'
import shoppingController from '../controllers/shoppingController.js'
const sh=Router()
import bodyParser from 'body-parser'
sh.use(bodyParser.json())
sh.get('/getAll',shoppingController.getAll)
sh.get('/getById/:id',shoppingController.getById)
sh.post('/add',shoppingController.add)
sh.post('/addShopping/:id',shoppingController.addShopping)
export default sh;