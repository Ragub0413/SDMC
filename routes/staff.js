import express from 'express';


import {createNewStaff,getStaffinfo,deleteStaffData, signinStaff} from '../controllers/staff.js';
const router = express.Router();

router.post("/newStaff", createNewStaff);
router.get("/staffdatas", getStaffinfo);
router.delete('/:id/remove',deleteStaffData);
router.post("/signin/staff",signinStaff)
    
export default router;
