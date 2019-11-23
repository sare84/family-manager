import { Document } from 'mongoose';

export interface User extends Document {
  readonly firstname: String;
  readonly lastname: String;
  readonly username: String;
  readonly password: String;
};