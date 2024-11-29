const Contact = require('../models/contact')
const contactUser = (req, res) => {
    try{
        Contact.create(req.body)
        res.send("ok msg send ")
    }catch(err){
        res.send("sth went wrong")
    }
}
module.exports ={contactUser}