import SQ from 'sequelize';
import { sequelize } from '../db/database.js';
<<<<<<< HEAD
=======
import { Score } from './score.js';
>>>>>>> 7d3c48eade89a856ae0fa3193041cb2a39815127


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

<<<<<<< HEAD

=======
Student.belongsTo(Score, { foreignKey: 'id', targetKey: 'id' });
>>>>>>> 7d3c48eade89a856ae0fa3193041cb2a39815127

sequelize.sync()
    .then(() => {
    console.log('students table has been successfully created.');
    })
    .catch((error) => {
    console.error('Unable to create students table:', error);
    });
