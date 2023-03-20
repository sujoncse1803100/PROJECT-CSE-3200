const User = require("../models/User");

const router = require("express").Router();

//UPDATE
router.put("/:id", async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString();
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(201).json(updatedUser);
  } catch (err) {
    res.status(500).json("Failed to authenticate user. Error is : ", err);
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(201).json("User has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET USER
router.get("/find/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(201).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ALL USERS
router.get("/findAll", async (req, res) => {
  try {
    const users = await User.find({});
    res.json(201, users);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET USER BY EMAIL
router.get("/find", async (req, res) => {
  const email = req.body.email;

  try {
    const users = await User.find({ email: email });
    res.status(201).json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
