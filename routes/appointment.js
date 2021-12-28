import express from 'express';

const router = express.Router();
import { createAppointment,getAppointments } from '../controllers/appointment.js';
router.get('/appointmentsss', getAppointments);
router.post('/', createAppointment);
export default router;