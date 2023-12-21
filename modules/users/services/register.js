const userModel = require("../model");
const bcrypt = require("bcrypt");

async function registerUser(req, res) {
  try {
    const existingUser = await userModel.findOne({ email: req.body.email });
    if (existingUser) {
      // User with this email already exists
      return res
        .status(409)
        .send({ code: 409, message: "User already present" });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = new userModel({
      ...req.body,
      password: hashedPassword,
    });
    await user.save();

    return res
      .status(200)
      .send({ code: 200, message: "user added", data: user });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ code: 400, message: "error adding user" });
  }
}

module.exports = registerUser;
