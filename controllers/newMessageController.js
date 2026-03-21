const getNewMessagePage = (req, res) => {
  res.render('newMessage', { title: 'New Message' });
};

export { getNewMessagePage };
