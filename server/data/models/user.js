import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    userName: { type: String, required: true },
    passwordHash: { type: String, required: true },
});

export default mongoose.model('User', schema);