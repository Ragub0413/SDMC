import express from 'express';

const router = express.Router();
import { createAppointment,getAppointments,cancelAppointment } from '../controllers/appointment.js';
router.get('/appointmentsss', getAppointments);
router.post('/', createAppointment);
router.patch('/:id/cancelAppointment', cancelAppointment);
export default router;