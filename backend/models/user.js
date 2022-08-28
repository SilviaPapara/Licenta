const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});


const productSchema = new mongoose.Schema({
  id:{ type: Int16Array, required: true },
  productName: { type: String, required: true },
  description: { type: String, required: true, unique: true },
  price: { type: Float32Array, required: true },
  currency: { type: String, required: true },
  thumb: { type: String, required: true },
});



userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
    expiresIn: "7d",
  });
  return token;
};

const User = mongoose.model("user", userSchema);

const validate = (data) => {
  const Schema = Joi.object({
    username: Joi.string().required().label("Username"),
    email: Joi.string().email().required.label("Email"),
    password: passwordComplexity().required().label("Password"),
  });

  return schema.validate(data);
};

module.exports = { User, validate };
