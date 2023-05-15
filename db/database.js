// import mysql from 'mysql2'; sequelize 깔았으므로 삭제해도 됨
import { config } from '../config.js';
import SQ from 'sequelize';

const { host, user, database, password } = config.db;

export const sequelize = new SQ.Sequelize(database, user, password, {
    host,
    dialect: 'mysql',
    logging: false,
    timezone: "+09:00"
})