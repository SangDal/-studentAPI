import express from 'express';
import scoreRouter from './router/score.js';
import studentRouter from './router/student.js';
import { config } from './config.js';
import { sequelize } from './db/database.js';
import SQ from 'sequelize';

const app = express();

// 미들웨어 설정
app.use(express.json());

// Router
app.use('/score', scoreRouter);
app.use('/student', studentRouter);

app.use((req, res, next) => {
    res.sendStatus(404);
});

// 서버 에러 처리
app.use((error, req, res, next) => {
    console.log(error);
    res.sendStatus(500);
});

// Sequelize 연결
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection to the database has been established successfully.');
        app.listen(config.port, () => {
        console.log(`Server is running on port ${config.port}`);
        });
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    });
