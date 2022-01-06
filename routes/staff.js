import express from 'express';


import {createNewStaff,getStaffinfo,deleteStaffData} from '../controllers/staff.js';
const router = express.Router();

router.post("/newStaff", createNewStaff);
router.get("/staffdatas", getStaffinfo);
router.delete('/:id/remove',deleteStaffData);

export default router;
