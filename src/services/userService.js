import User from '../models/user.js';

export const createUser = async ({ name, email }) => {
  if (!name || !email) {
    throw new Error('Nome ou E-mail são Obrigatórios');
  }

  const user = await User.create({
    name: name,
    email: email,
  });
  return user;
};

export const getAllUsers = async () => {
  const users = await User.find();
  return users;
};
