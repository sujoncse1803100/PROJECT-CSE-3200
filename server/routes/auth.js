const router = require("express").Router();
const User = require("../models/User");

router.post("/register", async (req, res) => {
  const newUser = new User(req.body);
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to authenticate user.", error: err });
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    res.json(user);
  } catch (err) {
    res.status(500).json("Failed to authenticate user. Error is : ", err);
  }
});

module.exports = router;
