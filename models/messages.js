import pool from '../db/pool.js';

const getAllMessages = async () => {
  const { rows } = await pool.query('SELECT * FROM messages');
  return rows;
};

const addMessage = async (messageText, messageUser) => {
  await pool.query('INSERT INTO messages (text, "user") VALUES ($1, $2)', [
    messageText,
    messageUser,
  ]);
};

const getMessageById = async (selectedId) => {
  const { rows } = await pool.query('SELECT * FROM messages WHERE id = $1', [
    selectedId,
  ]);
  return rows[0];
};

export { getAllMessages, addMessage, getMessageById };
