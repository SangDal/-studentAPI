// student.js 파일

import express from 'express';
import * as studentController from '../controller/studentController.js';

const router = express.Router();

<<<<<<< HEAD
//  전체 학생 정보 목록 조회
router.get('/', studentController.getAllStudents);
=======
// 학생 전체 정보 목록 조회
router.get('/:id', studentController.getAllStudents);
>>>>>>> 7d3c48eade89a856ae0fa3193041cb2a39815127

// 학생 생성
router.post('/', studentController.createStudent);

// 학생 수정
router.put('/:id', studentController.updateStudent);

// 학생 삭제 ( 데이터베이스에 Foreign 키로 묶여 있어서 score에서 점수를 삭제후 삭제 가능)
router.delete('/:id', studentController.deleteStudent);


export default router;
