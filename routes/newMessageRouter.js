import { Router } from 'express';
import { getNewMessagePage } from '../controllers/newMessageController.js';

const newMessageRouter = Router();

newMessageRouter.get('/', getNewMessagePage);

export default newMessageRouter;
