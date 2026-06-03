const express = require('express');
const { updateLocation, getAllUsers, getRoute, getAddress } = require('../controllers/locationController');

const router = express.Router();

router.post('/update', updateLocation);
router.get('/users', getAllUsers);
router.post('/route', getRoute);
router.post('/address', getAddress);

module.exports = router;