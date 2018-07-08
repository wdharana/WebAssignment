const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const LabSchema = mongoose.Schema({
    labName: {
        type: String,
        required: true
    },
    labDescription: {
        type: String,
        required: true
    }

});

const Lab = module.exports = mongoose.model('Lab', LabSchema);

module.exports.addLab = function (newLab, callback) {
    newLab.save(callback);
}

module.exports.getLabBylabName = function (labName , callback) {
    const query = {labName:labName};
    Lab.findOne(query, callback);
}