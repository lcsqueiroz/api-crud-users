import {
  createUser,
  getAllUsers,
  updateUser,
} from '../services/userService.js';

export const postUser = async (req, res) => {
  const { name, email } = req.body;
  try {
    const result = await createUser({ name, email });
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getUsers = async (req, res) => {
  const users = await getAllUsers();
  res.status(200).json(users);
};

export const putUser = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const data = { name, email };

  try {
    const result = await updateUser({ id, data });
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
