import { User } from '../models';

const getUsers = async () => {
    let users = await User.find();
    return users;
}

const getUser = async (userName, passwordHash) => {
    let users = await User.find({ userName, passwordHash });
    if (users.length > 0) {
        return users[0];
    }

    return null;
}

const getUserById = async (id) => {
    let users = await User.find({ _id: id });
    if (users.length > 0) {
        return users[0];
    }

    return null;
}

const addUser = async (userToAdd) => {
    await User.create(userToAdd);
}

export { getUser, getUsers, addUser, getUserById };