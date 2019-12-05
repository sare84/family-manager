import { Document } from 'mongoose';

export interface Todo extends Document {
  description: String;
  created: Date;
  done: Boolean;
  creator: String;
  assigned: String;
};