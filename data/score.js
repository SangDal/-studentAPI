import SQ, { Sequelize } from 'sequelize';
import { sequelize } from '../db/database.js';
//import { Student } from './student.js';//처음에 foreign키 잘못 설정함 ...

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

<<<<<<< HEAD
// 일련번호(id)로 연결해주기
Score.belongsTo(Student, { foreignKey: 'id', targetKey: 'id' });

=======
//Score.belongsTo(Student, { foreignKey: 'id', targetKey: 'id' });
//처음에 foreign키 잘못 설정함 ...
>>>>>>> 7d3c48eade89a856ae0fa3193041cb2a39815127


Score.sync()
    .then(() => {
    console.log('score table has been successfully created.');
    })
    .catch((error) => {
    console.error('Unable to create score table:', error);
    });


export { Score };




