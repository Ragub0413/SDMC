import express from 'express';

const router = express.Router();
import { createAppointment,getAppointments,cancelAppointment, updateAppointment } from '../controllers/appointment.js';
router.get('/appointmentsss', getAppointments);
router.post('/', createAppointment);
router.patch('/:id/cancelAppointment', cancelAppointment);
router.patch('/:id/updateAppointment',updateAppointment)
export default router;