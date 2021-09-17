require('dotenv').config();
const express = require('express');
const { Sequelize } = require('sequelize');

const app = express();
const port = 3000;

const sequelize = new Sequelize(process.env.DBURL);

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

app.get('/', (req, res) => {
    res.send('yeet');
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});