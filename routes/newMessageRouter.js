import { Router } from 'express';
import {
  getNewMessagePage,
  handleNewMessageFormSubmit,
} from '../controllers/newMessageController.js';

const newMessageRouter = Router();

newMessageRouter.get('/', getNewMessagePage);
newMessageRouter.post('/', handleNewMessageFormSubmit);

export default newMessageRouter;
