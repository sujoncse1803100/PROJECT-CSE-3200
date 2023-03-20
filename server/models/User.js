const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, required: false, unique: false },
    age: { type: String, required: false, unique: false },
    phone: { type: String, required: false, unique: false },
    birthday: { type: String, required: false, unique: false },
    gender: { type: String, required: false, unique: false },
    address: { type: String, required: false, unique: false },
    country: { type: String, required: false, unique: false },
    city: { type: String, required: false, unique: false },
    postCode: { type: String, required: false, unique: false },
    birthday: { type: String, required: false, unique: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("customer", UserSchema);
