const {Client} = require('pg');
require('dotenv').config();

const client = new Client({
    user: process.env.USER,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    database: process.env.DATABASE,
    port: process.env.PORT,
})

const SQL = `
CREATE TABLE IF NOT EXISTS users(
id SERIAL PRIMARY KEY,
firstName VARCHAR(255),
lastName VARCHAR(255),
username VARCHAR(255),
password VARCHAR(100),
membershipStatus TEXT
);

CREATE TABLE IF NOT EXISTS messages(
id SERIAL PRIMARY KEY,
title TEXT,
time TIMESTAMP,
message TEXT,
username VARCHAR(255)
);`

async function main(){
    await client.connect();
    await client.query(SQL);
    client.end();
}
main();