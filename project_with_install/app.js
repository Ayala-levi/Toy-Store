import express from 'express'
import mongoose from 'mongoose' 
import ca from './route/categoryRouter.js'
import ga from './route/gameRouter.js'
import cl from './route/clientRouter.js'
import sh from './route/shoppingRouter.js'
 import cors from 'cors'
const app=express()
app.use(cors())
app.use('/images',ca)
app.use('/category',ca)
app.use('/game',ga)
app.use('/client',cl)
app.use('/shopping',sh)

app.use(express.static('images'))
//ייבוא כתובת לפרויקט
app.listen("8080",()=>{console.log("run barouch hashem")})
mongoose.connect('mongodb://localhost:27017/game_shop')
.then(()=>{
    console.log("connect to mongo")
})
.catch((error)=>{
    console.log(error.message)
})
