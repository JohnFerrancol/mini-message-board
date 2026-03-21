import { addMessage } from '../db.js';

const getNewMessagePage = (req, res) => {
  res.render('newMessage', { title: 'New Message' });
};

const handleNewMessageFormSubmit = (req, res) => {
  const messageText = req.body.messageText;
  const messageUser = req.body.messageUser;
  addMessage(messageText, messageUser);
  res.redirect('/');
};

export { getNewMessagePage, handleNewMessageFormSubmit };
