import Router from 'express'
import gameController from '../controllers/gameController.js'
const ga=Router()
import bodyParser from 'body-parser'
ga.use(bodyParser.json())
ga.get('/getAll',gameController.getAll)
ga.get('/getById/:id',gameController.getById)
ga.get('/getByCategory/:kid',gameController.getByCategoryId)
ga.post('/add',gameController.add)
ga.put('/update/:id',gameController.update)
ga.delete('/delete/:id',gameController.delete)
export default ga;