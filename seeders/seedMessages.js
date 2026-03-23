import { Client } from 'pg';
import 'dotenv/config';

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    text VARCHAR(255),
    "user" VARCHAR(255),
    added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);  

TRUNCATE TABLE messages RESTART IDENTITY;

INSERT into messages (text, "user")
VALUES
    ('Hi there!', 'Amando'),
    ('Hi World!', 'Charles');
`;

const main = async () => {
  console.log('Seeing Messages...');
  const client = new Client({ connectionString: process.env.DB_URL });

  try {
    await client.connect();
    await client.query(SQL);
    console.log('Done');
  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
};

main();
