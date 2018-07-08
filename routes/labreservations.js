const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');


const LabReservation = require('../models/labreservation');



router.post('/makeReservation', (req ,res, next) =>{
    const labName = req.body.labName;
    const reserveDate = req.body.reserveDate;
    const timePeriod = req.body.timePeriod;
    var time;
    let newLabReservation = new LabReservation({
        labName: req.body.labName,
        reserveDate: req.body.reserveDate,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        reservedBy: req.body.reservedBy,
        timePeriod: req.body.timePeriod
    });
   LabReservation.getReservation(labName, reserveDate, (err, labReservation) => {
       if (err) throw err;
       if(!labReservation){
           LabReservation.addReservation(newLabReservation, (err, labreservation) => {
               if (err){
                   res.json({success:false, msg:'Failed to make Reservation'})
               }else{
                   res.json({success:true, msg:'Reservation successfully made'})
               }
           });
       }else{
           for (let i=0; i<labReservation.length; i++) {
               time = labReservation[i].timePeriod;
               if (time == timePeriod){
                   return res.json({success: false, msg: 'This time period already reserved'});
               }

           }
           LabReservation.addReservation(newLabReservation, (err, labreservation) => {
               if (err) throw err;
               else{
                   res.json({success:true, msg:'Reservation successfully made'})
               }
           });

       }

   });

});

router.post('/checkreservations', (req, res, next) =>{
    const reserveDate = req.body.reserveDate;
    const timePeriod = req.body.timePeriod;
    var lab;
    var labArray = [];
    LabReservation.checkReservation(reserveDate, timePeriod, (err, labReservation) => {
        if (err) throw err;
        if(!labReservation){
            return res.json({
                labReservation: labArray
            });
        }
        else{
            for (let i=0; i<labReservation.length; i++) {
                lab = labReservation[i].labName;
                if (lab == "Lab A"){
                    labArray.push(lab);
                }else if (lab == "Lab B"){
                    labArray.push(lab);
                }else if (lab == "Lab C"){
                    labArray.push(lab);
                }else if (lab == "Lab D"){
                    labArray.push(lab);
                }else if (lab == "Lab E"){
                    labArray.push(lab);
                }else if (lab == "Third Year Lab"){
                    labArray.push(lab);
                }else if (lab == "Electronic Lab"){
                    labArray.push(lab);
                }

            }
            res.json({
                labReservation: labArray });
        }

    });

});

router.get('/allreservations', (req, res, next) => {
   LabReservation.showAllReservations( (err, labReservation) =>{
       if (err) throw err;
       if(!labReservation){
           return res.json({success: false, msg: 'There is no reservations'});
       }
       res.json({
           success: true,
           labReservation: labReservation

       });
   });

});

router.post('/deletereservation', (req, res, next) =>{
    const _id = req.body._id;
    // const timePeriod = req.body.timePeriod;
    LabReservation.deleatReservation(_id,(err, result) => {
        if (err) throw err;
        if(!result){
            return res.json({success: false, msg:"There is no Reservation"});
        }
        else{res.json({success: true, msg:"The Reservation Successfully Deleted"});

            }


    });

});






module.exports = router;