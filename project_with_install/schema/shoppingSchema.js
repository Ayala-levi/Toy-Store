import mongoose,{model,Schema} from 'mongoose'
const shopping=Schema({
    code_client:{
        type:mongoose.Types.ObjectId,
        ref:'client'
    },
    date:{
        type:Date,default:new Date(),},
        totalPrice:Number,
       arrShopping:Array

    //[{
    //     codeItem:String,
    //     amount:Number,
    //     totalPrice:Number
    // }
    // ]
})
export default model('shopping',shopping)