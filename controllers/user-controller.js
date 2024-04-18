const Username = require("../models/Users");
const mongoose = require("mongoose");

//Get all username
const getUsernames = async (req, res) => {
  const username = await Username.find({}).sort({ createdAt: -1 });

  res.status(200).json(username);
};

//get a single username
const getUsername = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Username not found" });
  }

  const username = await Username.findById(id);

  if (!username) {
    res.status(404).json({ error: "Username not found" });
  }

  res.status(200).json(username);
};

//create a new username
const createUsername = async (req, res) => {
  const { username } = req.body;

  try {
    const username = await Username.create({ username });
    res.status(200).json(username);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete a username
const deleteUsername = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Username not found" });
  }

  const username = await Username.findByIdAndDelete({ _id: id });

  if (!username) {
    return res.status(400).json({ error: "Username not found" });
  }

  res.status(200).json({ messsage: "Username deleted successfully" });
};

//update a username
const updateUsername = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Username not found" });
  }

  const username = await Username.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!username) {
    res.status(404).json({ error: "Username not found" });
  }

  res.status(200).json(username);
};

module.exports = {
  createUsername,
  getUsernames,
  getUsername,
  deleteUsername,
  updateUsername,
};
