const User = require('../models/users');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

const registerNewUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) return res.send({ message: "Email Already Exist" });

    req.body.password = await bcrypt.hash(req.body.password, saltRounds);
    await User.create(req.body);
    return res.send({ message: "User created" });

  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Server error" });
  }
};

const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.send({ message: "Email does not Exist" });

    const isMatched = await bcrypt.compare(req.body.password, user.password);
    if (!isMatched) return res.send({ message: "Password does not Match" });

    const token = jwt.sign(
      { email: req.body.email },
      'f351bde270198284e160885955749ff1541e81ac341e97f85dced21e0749204b488186e280067b14d7d0b331124490d93205c4dba2222a4b1838f77048f8a69aee3c00407cf8dee3ba170a55193ba9749c36b13fcbc9d69aa2214c501cce174fb7b204c1e48476f2a08d61f822e38f804d65c1abf9472936ddc8646f5551ce95',
      { expiresIn: '1d' }
    );

    return res.send({
      token,
      user,
      isLoggedIn: true,
      message: "Login Successful! Welcome to Luxemart"
    });

  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Server error" });
  }
};

module.exports = { registerNewUser, loginUser };
