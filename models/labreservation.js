const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const LabReservationSchema = mongoose.Schema({
    labName: {
        type: String,
        required: true
    },
    reserveDate: {
        type: String,
        required: true
    },
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type:String,
        required: true
    },

    reservedBy: {
        type: String,
        required: true
    },
    timePeriod: {
        type: String,
        required: true

    }


});

const Labreservation = module.exports = mongoose.model('Labreservation', LabReservationSchema);

module.exports.addReservation = function (newReservation , callback) {
    newReservation.save(callback);
}

module.exports.getReservation = function (labName , reserveDate, callback) {
    const query = {labName:labName,reserveDate:reserveDate};
    Labreservation.find(query, callback);
}
module.exports.checkReservation = function (reserveDate , timePeriod, callback) {
   const query = {reserveDate:reserveDate,timePeriod:timePeriod};
    Labreservation.find(query,callback);

}

module.exports.showAllReservations = function (callback) {
    Labreservation.find({},callback);
}

module.exports.deleatReservation = function (_id ,callback) {
    const query = {_id:_id};
    Labreservation.remove(query,callback);

}





