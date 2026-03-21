const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

const addMessage = (newText, newUser) => {
  messages.push({ text: newText, user: newUser, added: new Date() });
};

export { messages, addMessage };
