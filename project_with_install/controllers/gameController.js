import gameSchema from "../schema/gameSchema.js"
export default{
 getAll: (req, res) => {
        gameSchema.find()
            .then((list) => {
                res.status(200).send(list)
            })
            .catch((error) => {
                res.status(404).send(error.message)
            })
    },
    getById:(req,res)=>{ 
        gameSchema.findById(req.params.id).populate('code_category')
       .then((g)=>res.status(200).send(g))
       .catch((error)=>res.status(404).send(error.message))
    },
    getByCategoryId:(req,res)=>{ 
        gameSchema.find({code_category:req.params.kid})
       .then((g)=>res.status(200).send(g))
       .catch((error)=>res.status(404).send(error.message))
    },
    add:(req,res)=>{ 
        const g=new gameSchema(req.body)
        g.save()
       .then((g)=>res.status(200).send(g))
       .catch((error)=>res.status(404).send(error.message))
    },
       update: (req, res) => {
           gameSchema.findByIdAndUpdate(req.params.id,req.body,{new:true})
               .then((k) => {
                   res.status(200).send(k)
               })
               .catch((error) => {
                   res.status(404).send(error.message)
               })
       },
        delete: (req, res) => {
               gameSchema.findByIdAndDelete(req.params.id)
                   .then(() => {
                       res.status(200).send(true)
                   })
                   .catch(() => {
                       res.status(404).send(false)
                   })
           }


}