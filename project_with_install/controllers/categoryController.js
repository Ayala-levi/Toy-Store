import categorySchema from "../schema/categorySchema.js"
export default {

    getAll: (req, res) => {
        categorySchema.find()
            .then((list) => {
                res.status(200).send(list)
            })
            .catch((error) => {
                res.status(404).send(error.message)
            })
    },

    add: (req, res) => {
        const k = new categorySchema(req.body)
        categorySchema.findOne({ name: k.name })
            .then((obj) => {
                if (obj != null)
                    res.status(200).send("אתה קיים כבר")
                else {
                    k.save()
                        .then((k) => {
                            res.status(200).send(k)
                        })
                        .catch((error) => {
                            res.status(404).send(error.message)
                        })
                }
            })
            .catch((error) => {
                res.status(404).send(error.message)
            })


    },
    update: (req, res) => {
        categorySchema.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then((k) => {
                res.status(200).send(k)
            })
            .catch((error) => {
                res.status(404).send(error.message)
            })
    },
    delete: (req, res) => {
        categorySchema.findByIdAndDelete(req.params.id)
            .then(() => {
                res.status(200).send(true)
            })
            .catch(() => {
                res.status(404).send(false)
            })
    }





}