const messages = [
  {
    id: 1,
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    id: 2,
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

const addMessage = (newText, newUser) => {
  messages.push({
    id: messages.length + 1,
    text: newText,
    user: newUser,
    added: new Date(),
  });
};

const getMessageById = (messageId) => {
  return messages.find((message) => message.id === messageId);
};

export { messages, addMessage, getMessageById };
