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

export const updateUser = async ({ id, data }) => {
  if (!id) {
    throw new Error('usuário não encontrado');
  }
  const updatedUser = await User.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });

  return updatedUser;
};

export const deleteUserID = async ({ id }) => {
  if (!id) {
    throw new Error('Usuário não encontrado');
  }
  const result = await User.deleteOne({ _id: id });

  return result;
};
