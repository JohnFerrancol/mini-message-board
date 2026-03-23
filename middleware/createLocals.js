import { getAllMessages } from '../models/messages.js';

const createLocals = async (req, res, next) => {
  res.locals.links = [
    { href: '/', text: 'Odin Message Board' },
    { href: '/new', text: 'New Message', icon: 'fas fa-envelope-open' },
  ];

  res.locals.messages = await getAllMessages();
  res.locals.errors = [];

  next();
};

export default createLocals;
