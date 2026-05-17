import User from '../models/user.js';

export const createUser = async ({ name, email }) => {
  if (!name || !email) {
    throw new Error('Nome ou E-mail são Obrigatórios');
  }

  const existingUser = await User.findOne({ $or: [{ name }, { email }] });
  if (existingUser) {
    throw new Error('Usuário já cadastrado');
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
