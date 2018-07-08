const express = require('express');
const router = express.Router();

const Lab = require('../models/lab');

router.post('/registerlab', (req, res, next) => {
    let newLab = new Lab({
        labName: req.body.labName,
        labDescription: req.body.labDescription
    });
    const labName = req.body.labName;
    Lab.getLabBylabName(labName, (err, lab) => {
        if (err) throw err;
        if (!lab) {
            Lab.addLab(newLab, (err, lab) => {
                if (err) {
                    res.json({success: false, msg: 'Failed to register Lab'})
                } else {
                    res.json({success: true, msg: 'Lab registered'})
                }
            });

        } else {
            return res.json({success: false, msg: 'Lab Already Registered'});
        }
    });
});









module.exports = router;