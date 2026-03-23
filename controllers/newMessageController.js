import { addMessage } from '../models/messages.js';
import { validationResult, matchedData } from 'express-validator';
import { newMessageValidator } from '../middleware/validators/messagesValidator.js';

const getNewMessagePage = (req, res) => {
  res.render('newMessage', { title: 'New Message' });
};

const handleNewMessageFormSubmit = [
  newMessageValidator,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .render('newMessage', { title: 'New Message', errors: errors.array() });
    }
    const { messageUser, messageText } = matchedData(req);
    await addMessage(messageText, messageUser);
    res.redirect('/');
  },
];

export { getNewMessagePage, handleNewMessageFormSubmit };
