import mongoose from 'mongoose'
//const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
name: {
type: String,
trim: true,
required: 'Name is required'
},
description: {
type: String,
trim: true,
required: 'Description is required'
},
price: {
type: Number,
trim: true,
required: 'Price is required'
},
quantity: {
type: Number,
trim: true,
required: 'Quantity is required'
},
category: {
type: String,
required: 'Category is required'
},
// salt: String
// });
// UserSchema.virtual('password')
// .set(function(password) {
// this._password = password;
// //this.salt = this.makeSalt();
// this.hashed_password = password;
// //this.hashed_password = this.encryptPassword(password);
// })
// .get(function() {
// return this._password;
// });
// UserSchema.path('hashed_password').validate(function(v) {
// if (this._password && this._password.length < 6) {
// this.invalidate('password', 'Password must be at least 6 characters.');
// }
// if (this.isNew && !this._password) {
// this.invalidate('password', 'Password is required');
// }
// }, null);
//module.exports = mongoose.model('User', UserSchema);
}, null);
export default mongoose.model('products', UserSchema);
