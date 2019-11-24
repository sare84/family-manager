import * as mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  firstname: { type: String, unique: false, required: true },
  lastname: { type: String, unique: false, required: true },
  username: { type: String, unique: true, required: true },
  password: { type: String, unique: false, required: true },
});

/**
 * Method is used to delete the hashed password on the way to the client!
 */
UserSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
}

export {
  UserSchema
}