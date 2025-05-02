
import {Router} from 'express';
const router = Router();

import renderIndex from '../controllers/renderIndex.js';

router.get('/', renderIndex);

export default router