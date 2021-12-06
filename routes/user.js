import express from 'express';

const router = express.Router();
import { signup,signin,getInformation,getInformations,updateInformation } from '../controllers/user.js';

router.post("/signin",signin);
router.post("/signup",signup);
router.patch('/:id',updateInformation);
router.get('/info',getInformations);
export default router;