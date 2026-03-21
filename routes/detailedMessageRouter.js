import { Router } from 'express';
import { getDetailsPage } from '../controllers/detailedMessageController.js';

const detailedMessageRouter = Router();

detailedMessageRouter.get('/:messageId', getDetailsPage);
export default detailedMessageRouter;
