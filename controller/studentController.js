import { Student } from '../data/student.js';

// 모든 학생 조회
export const getAllStudents = async (req, res, next) => {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (error) {
    next(error);
  }
};

// 학생 상세 정보 조회
export const getStudentById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const student = await Student.findByPk(id);
    if (student) {
      res.json(student);
    } else {
      res.status(404).json({ message: 'Student not found' });
    }
  } catch (error) {
    next(error);
  }
};

// 학생 생성
export const createStudent = async (req, res, next) => {
  const { student_number, name, contact, email, address } = req.body;
  try {
    const student = await Student.create({
      student_number,
      name,
      contact,
      email,
      address,
    });
    // 값확인용
    //console.log(student);
    res.status(201).json(student);
  } catch (error) {
    next(error);
  }
};

// 학생 수정
export const updateStudent = async (req, res, next) => {
  const { id } = req.params;
  const { student_number, name, contact, email, address } = req.body;
  try {
    const student = await Student.findByPk(id);
    if (student) {
      await student.update({
        student_number,
        name,
        contact,
        email,
        address,
      });
      res.json(student);
    } else {
      res.status(404).json({ message: 'Student not found' });
    }
  } catch (error) {
    next(error);
  }
};

// 학생 삭제
export const deleteStudent = async (req, res, next) => {
  const { id } = req.params;
  try {
    const student = await Student.findByPk(id);
    if (student) {
      await student.destroy();
      res.json({ message: 'Student deleted successfully' });
    } else {
      res.status(404).json({ message: 'Student not found' });
    }
  } catch (error) {
    next(error);
  }
};


export const getStudentWithScoreBySN = async (req, res, next) => {
    
    const { studentNumber } = req.params;

    try {
      // 학번으로 학생 정보 조회
      const student = await Student.findOne({ where: { student_number: studentNumber } });
  
      if (!student) {
        return res.status(404).json({ message: 'Student not found' });
      }
  
      // 학번으로 점수 정보 조회
      const score = await score.findOne({ where: { id: student.id } });
  
      res.json({ student, score });
    } catch (error) {
      next(error);
    }
  };