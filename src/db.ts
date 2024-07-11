import mysql from 'mysql2/promise';

export const db = mysql.createPool({
  host: '127.0.0.1',
  user: 'admin',
  password: 'u3wxSQ4Ts7M8n4ed',
  database: 'completed_v2',
  port: 3307, // specify your custom port here
  connectTimeout: 10000 // set a timeout in milliseconds
});

