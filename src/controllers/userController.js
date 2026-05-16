import { createUser, getAllUsers } from '../services/userService.js';

export const postUser = async (req, res) => {
  const { name, email } = req.body;
  const result = await createUser({ name, email });
  res.status(201).json(result);
};

export const getUsers = async (req, res) => {
  const users = await getAllUsers();
  res.status(200).json(users);
};
