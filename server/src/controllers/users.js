const User =require('../models/users')
const registerNewUser = (req, res) => {
<<<<<<< HEAD
  try{
    User.create(req.body)
  res.send("ok created");
  }catch(err){
    res.send("somthing went wrong");
  }

=======
  User.create(req.body)
  res.send("ok created");
>>>>>>> origin/main
}
const loginUser = (req, res) => {
  res.send("ok");
}
module.exports ={registerNewUser,loginUser}