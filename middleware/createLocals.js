import { messages } from '../db.js';

const createLocals = (req, res, next) => {
  res.locals.links = [
    { href: '/', text: 'Home' },
    { href: '/new', text: 'New Message' },
  ];

  res.locals.messages = messages;

  next();
};

export default createLocals;
