import { body } from 'express-validator';

export const newMessageValidator = [
  body('messageUser')
    .trim()
    .isLength({ min: 6, max: 20 })
    .withMessage('Username should be between 6 to 20 characters'),
  body('messageText')
    .trim()
    .isLength({ min: 1, max: 200 })
    .withMessage('Message has a character limit of 200!'),
];
