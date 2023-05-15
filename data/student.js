import SQ from 'sequelize';
import { sequelize } from '../db/database.js';
//import { Score } from './score.js';

// 서버를 다시 킬때마다 테이블을 새로 만들면 기존 데이터가 날라가니까..

// DataTypes: 데이터 타입을 결정해주는 prop
const DataTypes = SQ.DataTypes; 

// Student라는 객체는 테이블이다.
export const Student = sequelize.define(
    'students', 
{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    student_number: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    contact: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(50)
    },
    address: {
        type: DataTypes.STRING(100)
    },
    regdate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
});

//Student.belongsTo(Score, { foreignKey: 'id', targetKey: 'id' });

sequelize.sync()
    .then(() => {
    console.log('students table has been successfully created.');
    })
    .catch((error) => {
    console.error('Unable to create students table:', error);
    });
