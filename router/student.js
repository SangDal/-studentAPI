// student.js 파일

import express from 'express';
import { Student } from '../data/student.js';
import { Score } from '../data/score.js';

const router = express.Router();

// 학생 목록 조회
router.get('/', (req, res, next) => {
  res.json(Student);
});

// 학생 생성
router.post('/', (req, res, next) => {
  const { student_number, name, contact, email, address } = req.body;
  // 학생 생성 로직 추가

  res.status(201).json({ message: 'Student created successfully' });
});

// 학생 수정
router.put('/:id', (req, res, next) => {
  const { id } = req.params;
  const { student_number, name, contact, email, address } = req.body;
  // 학생 수정 로직 추가

  res.json({ message: 'Student updated successfully' });
});

// 학생 삭제
router.delete('/:id', (req, res, next) => {
  const { id } = req.params;
  // 학생 삭제 로직 추가

  res.json({ message: 'Student deleted successfully' });
});

// 학번으로 학생 정보 및 점수 조회
router.get('/:studentNumber', (req, res, next) => {
  const { studentNumber } = req.params;

  // 학번으로 학생 정보 조회
  const student = Student.find((student) => student.student_number === studentNumber);

  if (!student) {
    return res.status(404).json({ message: 'Student not found' });
  }

  // 학번으로 점수 정보 조회
  const score = Score.find((score) => score.id === student.id);

  res.json({ student, score });
});

export default router;
