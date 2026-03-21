import { messages } from '../db.js';

const createLocals = (req, res, next) => {
  res.locals.links = [
    { href: '/', text: 'Odin Message Board' },
    { href: '/new', text: 'New Message', icon: 'fas fa-envelope-open' },
  ];

  res.locals.messages = messages;

  next();
};

export default createLocals;
