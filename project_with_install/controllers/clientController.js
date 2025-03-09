import clientSchema from "../schema/clientSchema.js"
export default{
 getAll: (req, res) => {
        clientSchema.find()
            .then((list) => {
                res.status(200).send(list)
            })
            .catch((error) => {
                res.status(404).send(error.message)
            })
    },
    add:(req,res)=>{ 
        const g=new clientSchema(req.body)
        g.save()
       .then((g)=>res.status(200).send(g))
       .catch((error)=>res.status(404).send(error.message))
    },
    isExsist:(req,res)=>{ 
      clientSchema.findOne({name:req.params.name,password:req.params.password})
       .then((g)=>{
        if(g)
        res.status(200).send(true)
        else
        res.status(200).send(false)
    })
       .catch((error)=>res.status(404).send(error.message))
    }

,
    idClient:(req,res)=>{ 
        clientSchema.findOne({name:req.params.name,password:req.params.password})
         .then((g)=>{
          if(g)
          res.status(200).send(g._id)
          else
          res.status(200).send(false)
      })
         .catch((error)=>res.status(404).send(error.message))
      }
       


}