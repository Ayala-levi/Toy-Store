import {model,Schema} from 'mongoose'
const category=Schema({
name:{
    type:String
}
})
export default model('category',category)