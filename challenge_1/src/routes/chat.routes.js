
import { Router } from "express";

const router = Router();

import sendMessage from '../controllers/sendMessage.js';


router.post('/chat', sendMessage);


export default router