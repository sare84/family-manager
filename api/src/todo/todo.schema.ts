import * as mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({
  description: { type: String, unique: false, required: true },
  created: { type: Date, unique: false, required: true },
  creator: { type: String, unique: false, required: true },
  assigned: { type: String, unique: false, required: false },
  done: { type: Boolean, unique: false, required: true },
});

export {
  TodoSchema
}