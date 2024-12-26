const UserModel = require("../models/userModel");

const createUser = async (req, res) => {
  try {
    const { username, email, age } = req.body;
    const user = await UserModel.create({ username, email, age });
    res.status(201).json({ message: "user created successfully", user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getUsers = async (req, res) => {
  try {
    // const { id } = req.params;
    // console.log(id);
    const { name } = req.query;
    console.log(name);

    const users = await UserModel.find();
    res.status(200).json({ message: "user fetcehed successfully", users });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({ message: "user updated successfully", user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserModel.findByIdAndDelete(id);
    res.status(200).json({ message: "user deleted successfully", user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { createUser, getUsers, updateUser, deleteUser };
