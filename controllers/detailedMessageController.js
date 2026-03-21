import { getMessageById } from '../db.js';

const getDetailsPage = (req, res) => {
  const message = getMessageById(Number(req.params.messageId));
  res.render('details', { title: 'Details', message: message });
};

export { getDetailsPage };
