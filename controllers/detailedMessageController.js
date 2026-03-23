import { getMessageById } from '../models/messages.js';

const getDetailsPage = async (req, res) => {
  const message = await getMessageById(Number(req.params.messageId));
  res.render('details', { title: 'Details', message: message });
};

export { getDetailsPage };
