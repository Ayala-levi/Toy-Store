import mongoose,{model,Schema} from 'mongoose'
const game=Schema({
    name:String,
    code_category:{
        type:mongoose.Types.ObjectId,
        ref:'category'
    },
    price:Number,
    age:Number,
    img:String,
    amount:Number,
    detailsGame:String
})
export default model('game',game)