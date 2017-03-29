const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
    emal: String,
    password: String,
    name: String,
}, {
    timestamps: true
});

AdminSchema.methods.exampleMethod = function (password) {
    // Logic
};

const Admin = mongoose.model('Admin', AdminSchema);

module.exports = Admin;
