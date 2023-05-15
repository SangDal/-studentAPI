// student.js 파일

import express from 'express';
import { Student } from '../data/student.js';
import { Score } from '../data/score.js';
import * as studentController from '../controller/studentController.js';

const router = express.Router();

// 학생 전체 정보 목록 조회
router.get('/:id', studentController.getAllStudents);

// 학생 생성
router.post('/', studentController.createStudent);

// 학생 수정
router.put('/:id', studentController.updateStudent);

// 학생 삭제
router.delete('/:id', studentController.deleteStudent);


export default router;
