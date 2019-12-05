import * as mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({
  description: { type: String, unique: false, required: true },
  created: { type: Date, unique: false, required: true },
  username: { type: String, unique: false, required: true },
  done: { type: Boolean, unique: false, required: true },
});

export {
  TodoSchema
}