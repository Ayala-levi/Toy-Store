import mongoose,{model,Schema} from 'mongoose'
const client=Schema({
    name:String,
    password:String,
    // detailsCard:{nameCard:String,num:String,tokef:String,cvv:Number}
    detailsCard:Object
})
export default model('client',client)