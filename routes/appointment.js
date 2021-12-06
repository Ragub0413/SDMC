import express from 'express';
import { createAppointment,getAppointments } from '../controllers/appointment';
const router = express.Router();

router.get('/', getAppointments);
router.post('/appointmentDetails', createAppointment);
export default router;