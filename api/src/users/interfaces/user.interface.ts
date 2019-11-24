import { Document } from 'mongoose';

export interface User extends Document {
  firstname: String;
  lastname: String;
  username: String;
  password: String;
};