import SQ, { Sequelize } from 'sequelize';
import { sequelize } from '../db/database.js';
import { Student } from './student.js';

// 테이블 없으면 만들어주는.
const DataTypes = SQ.DataTypes; 

// 성적 테이블 필드
const Score = sequelize.define(
    'score',
    {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    java_score: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    python_score: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    c_score: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    total_score: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    average_score: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    regdate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
    },
    { timestamps: false }
);

Score.belongsTo(Student, { foreignKey: 'id', targetKey: 'id' });
//Score.belongsTo(Student); // 위랑 아래랑 둘중 뭘까?


Score.sync()
    .then(() => {
    console.log('score table has been successfully created.');
    })
    .catch((error) => {
    console.error('Unable to create score table:', error);
    });


export { Score };




