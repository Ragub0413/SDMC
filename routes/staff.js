import express from 'express';


import {createNewStaff,getStaffinfo,deleteStaff} from '../controllers/staff.js';
const router = express.Router();

router.post("/newStaff", createNewStaff);
router.get("/staffdatas", getStaffinfo);
router.delete("/:id",deleteStaff);
export default router;
