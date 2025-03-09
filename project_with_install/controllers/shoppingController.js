
import shoppingSchema from "../schema/shoppingSchema.js"
export default{
 getAll: (req, res) => {
        shoppingSchema.find()
            .then((list) => {
                res.status(200).send(list)
            })
            .catch((error) => {
                res.status(404).send(error.message)
            })
    },
      getById:(req,res)=>{ 
            shoppingSchema.find({code_client:req.params.id})
           .then((g)=>res.status(200).send(g))
           .catch((error)=>res.status(404).send(error.message))
        },
    addShopping:(req,res)=>{ 
       shoppingSchema.findOne({code_client:req.params.id})
        .then(g=>{
            console.log(g);
            const arr=[...g.arrShopping]
            console.log(arr);
            
            shoppingSchema.findByIdAndUpdate(g._id,{...g,"arrShopping":g.arrShopping.push(req.body)},{new:true})
            .then((g)=>{
             res.status(200).send(g)})
            .catch((error)=>res.status(404).send(error.message))
        })
        .catch((error)=>res.status(404).send(error.message))
    },
        add:(req,res)=>{ 
            const g=new shoppingSchema(req.body)
            g.save()
           .then((g)=>res.status(200).send(g))
           .catch((error)=>res.status(404).send(error.message))
        }


}